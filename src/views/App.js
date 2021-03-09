import { useEffect, useState } from "react";
import FinalScoreModal from "../components/FinalScoreModal";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Question from "../components/Question";
import QuizSettings from "../components/QuizSettings";
import FailMessage from "../components/FailMessage";
import NoMatchMessage from "../components/NoMatchMessage";
import {
  CATEGORIES,
  QUESTION_DIFFICULTIES,
  ANY,
  CATEGORY_ID_MAP,
} from "../data/data";

/**
 * Network Status Constants
 */
export const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
};

/**
 * Fetches quiz data from Open Trivia API
 * @param {*} userParams - the user specified parameters
 * @returns {*} quizData response
 */
const requestQuiz = async (userParams) => {
  const BASE_URL = "https://opentdb.com/api.php";
  let url = BASE_URL + createQueryString(userParams);
  let response = await fetch(url);
  let quizData = await response.json();
  return quizData;
};

/**
 * Helper function to create a query string used for the Open Trivia API
 * @param {Object} userParams - the user specified parameters
 * @returns {String} query string
 */
const createQueryString = (userParams) => {
  let params = [];
  for (let p in userParams) {
    if (userParams[p] !== ANY && p !== "category") {
      params.push(p + "=" + userParams[p]);
    } else if (userParams[p] !== ANY && p === "category") {
      params.push(p + "=" + findCategoryId(userParams[p]));
    }
  }
  return params.length === 0 ? "" : "?" + params.join("&");
};

/**
 * Helper Method finding the ID associated with the
 * @param {String} category - Trivia Category
 * @returns {Number} ID of category
 */
const findCategoryId = (category) => {
  return CATEGORY_ID_MAP[category];
};

const App = () => {
  const [params, setParams] = useState({
    amount: 1,
    category: ANY,
    difficulty: ANY,
  });
  const [responseCode, setResponseCode] = useState(0);
  const [categories, setCategories] = useState(CATEGORIES);
  const [difficulties, setDifficulties] = useState(QUESTION_DIFFICULTIES);
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const [status, setStatus] = useState(STATUS.SUCCESS);

  useEffect(() => {
    if (status === STATUS.LOADING) {
      requestQuiz(params)
        .then((data) => {
          console.log(data);
          setResponseCode(data["response_code"]);
          setQuizQuestions(data["results"]);
          setQuestionIdx(0);
          setQuestionCount(data["results"].length);
          setStatus(STATUS.SUCCESS);
        })
        .catch((error) => {
          setStatus(STATUS.FAIL);
          console.log(error);
        });
    }
  }, [status, questionIdx, params]);

  /**
   * Increases quiz score
   */
  const increaseScore = () => {
    setScore(score + 1);
  };

  /**
   * Increment Question index.
   */
  const nextQuestion = () => {
    setQuestionIdx(questionIdx + 1);
  };

  /**
   * Sets boolean flags to display components
   * @param {Boolean} showQuiz - flag to show questions (true) or not (false)
   * @param {Boolean} showSettings - flag to show quiz settings (true) or not (false)
   */
  const goToSettingsOrQuiz = (showQuiz, showSettings) => {
    setShowQuiz(showQuiz);
    setShowSettings(showSettings);
  };

  return (
    <>
      <NavBar />
      <FinalScoreModal
        score={score}
        questionCount={questionCount}
        goToSettingsOrQuiz={goToSettingsOrQuiz}
        updateScore={setScore}
      />
      <QuizSettings
        showSettings={showSettings}
        categories={categories}
        difficulties={difficulties}
        amount={params.amount}
        category={params.category}
        difficulty={params.difficulty}
        updateParams={setParams}
        updateStatus={setStatus}
        goToSettingsOrQuiz={goToSettingsOrQuiz}
      />
      {status === STATUS.LOADING ? (
        <Loading />
      ) : (
        showQuiz &&
        questionCount > 0 && (
          <Question
            questionNumber={questionIdx + 1}
            questionCount={questionCount}
            question={quizQuestions[questionIdx]}
            increaseScore={increaseScore}
            nextQuestion={nextQuestion}
          />
        )
      )}
      <NoMatchMessage
        status={status}
        setResponseCode={setResponseCode}
        setShowSettings={setShowSettings}
        responseCode={responseCode}
      />
      <FailMessage
        status={status}
        goToSettingsOrQuiz={goToSettingsOrQuiz}
        showSettings={showSettings}
      />
    </>
  );
};

export default App;
