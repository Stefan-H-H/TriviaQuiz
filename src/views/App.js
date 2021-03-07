import { useEffect, useState } from "react";
import FinalScoreModal from "../components/FinalScoreModal";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Question from "../components/Question";
import QuizSettings from "../components/QuizSettings";
import {
  CATEGORIES,
  ANY_CATEGORY,
  ANY_DIFFICULTY,
  QUESTION_DIFFICULTIES,
  ANY,
  CATEGORY_ID_MAP,
  DUMMY_DATA,
} from "../data/data";

export const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail",
};

const buildURL = (params) => {
  // TODO: build helper function for creating URL
};

const requestQuiz = async (userParams) => {
  // TODO: build URL & return response
  const BASE_URL = "https://opentdb.com/api.php";
  let url = BASE_URL + createQueryString(userParams);
  let response = await fetch(url);
  let quizData = await response.json();
  return quizData;
};
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
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

const findCategoryId = (category) => {
  return CATEGORY_ID_MAP[category];
};

const App = () => {
  // const[status, setStatus] = useState(STATUS.LOADING);
  const [params, setParams] = useState({
    amount: 1,
    category: ANY,
    difficulty: ANY,
  });
  const [responseCode, setResponseCode] = useState(0);
  const [categories, setCategories] = useState(CATEGORIES);
  const [difficulties, setDifficulties] = useState(QUESTION_DIFFICULTIES);
  const [quizQuestions, setQuizQuestions] = useState(DUMMY_DATA);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [questionCount, setQuestionCount] = useState(1);
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

  const increaseScore = () => {
    setScore(score + 1);
  };

  const nextQuestion = () => {
    setQuestionIdx(questionIdx + 1);
  };

  return (
    <>
      <NavBar />
      <FinalScoreModal
        score={score}
        questionCount={questionCount}
        updateShowQuiz={setShowQuiz}
        updateShowSettings={setShowSettings}
        updateScore={setScore}
      />
      {showSettings && (
        <QuizSettings
          categories={categories}
          difficulties={difficulties}
          amount={params.amount}
          category={params.category}
          difficulty={params.difficulty}
          updateParams={setParams}
          updateStatus={setStatus}
          updateShowQuiz={setShowQuiz}
          updateShowSettings={setShowSettings}
        />
      )}
      {status === STATUS.LOADING ? (
        <Loading />
      ) : (
        showQuiz && (
          <Question
            questionNumber={questionIdx + 1}
            questionCount={questionCount}
            question={quizQuestions[questionIdx]}
            increaseScore={increaseScore}
            nextQuestion={nextQuestion}
          />
        )
      )}
    </>
  );
};

export default App;
