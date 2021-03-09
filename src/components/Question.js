import { useEffect, useState } from "react";
import Answers from "./Answers";

/**
 * Maximum answers per API
 */
const MAX_ANSWERS = 4;

/**
 * Default answer button styles.
 */
const ANSWER_STYLE = {
  REGULAR: "btn btn-primary m-2",
  INCORRECT: "btn btn-danger m-2",
  CORRECT: "btn btn-success m-2",
};

/**
 * API Keys for question results
 */
const QUESTION_KEYS = {
  CORRECT_ANSWER: "correct_answer",
  INCORRECT_ANSWERS: "incorrect_answers",
  QUESTION_TEXT: "question",
  CATEGORY: "category",
  DIFFICULTY: "difficulty",
};

/**
 * Helper to parse Unicode text into regular text.
 * @param {String} txt - Unicode text to be parsed
 * @returns {String} regulartext
 */
const parseEntities = (txt) =>
  new DOMParser().parseFromString(txt, "text/html").body.innerText;

/**
 * Helper function to shuffle an array
 * @param {*} array - array to be shuffled
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

/**
 * Function that combines the correct and incorrect answers
 * into one array and shuffles them.
 * @param {String} correctAnswer correct answer for the question
 * @param {Array} otherAnswers Array of Strings containing other incorrect answers for the question
 * @returns {Array} shuffled answer array
 */
const getAllAnswers = (correctAnswer, otherAnswers) => {
  let answers = [];
  Object.assign(answers, otherAnswers);
  answers.push(correctAnswer);
  shuffleArray(answers);
  return answers;
};

/**
 * Helper function to show/hide an alert when the user answers a question
 * @param {string} alertType - The Bootstrap alert class to use.
 * @param {string} alertMsg - The message to display in the alert.
 * @param {boolean} timeout - Whether the alert should be removed after
 * two seconds. Default = true.
 * * @param {Number} timeoutAmount - Timeout amount in milliseconds. Default = 2 seconds
 */
const answerFeedback = (
  alertType,
  alertMsg,
  timeout = true,
  timeoutAmount = 2000
) => {
  // Creates a unique ID from the time in milliseconds since 1/1/1970
  let id = new Date().getTime();
  document.getElementById("action-feedback").innerHTML =
    '<div class="text-center alert ' +
    alertType +
    '" role="alert" id="' +
    id +
    '">' +
    alertMsg +
    "</div>";
  if (timeout) setTimeout(() => removeAnswerFeedback(id), timeoutAmount);
};

/**
 * Helper function to remove question feedback alert.
 */
const removeAnswerFeedback = (alertId) => {
  if (alertId) {
    // If a specific ID is provided (for use when a timer runs out)
    if (document.getElementById(alertId))
      // Checking that the alert is still in the DOM
      document
        .getElementById("action-feedback")
        .removeChild(document.getElementById(alertId));
  } else document.getElementById("action-feedback").innerHTML = "";
};

const Question = (props) => {
  const initialStyles = Array(MAX_ANSWERS).fill(ANSWER_STYLE.REGULAR);
  const [allAnswers, setAllAnswers] = useState(
    getAllAnswers(
      props.question[QUESTION_KEYS.CORRECT_ANSWER],
      props.question[QUESTION_KEYS.INCORRECT_ANSWERS]
    )
  );
  const [answerStyles, setAnswerStyles] = useState(initialStyles);
  const [showNextQuestionBtn, setShowNextQuestionBtn] = useState(false);
  const [showFinishQuizBtn, setShowFinishQuizBtn] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const { questionNumber, questionCount, nextQuestion, increaseScore } = props;

  let correctAnswer = props.question[QUESTION_KEYS.CORRECT_ANSWER];
  let question = props.question[QUESTION_KEYS.QUESTION_TEXT];
  let category = props.question[QUESTION_KEYS.CATEGORY];
  let difficulty = props.question[QUESTION_KEYS.DIFFICULTY];

  useEffect(() => {
    setAllAnswers(
      getAllAnswers(
        props.question[QUESTION_KEYS.CORRECT_ANSWER],
        props.question[QUESTION_KEYS.INCORRECT_ANSWERS]
      )
    );
  }, [props.question]);

  /**
   * Handler for when a user answers a questions.
   * Displays either the next question button or finish quiz button.
   */
  const handleQuestionAnswered = () => {
    questionNumber < questionCount
      ? setShowNextQuestionBtn(true)
      : setShowFinishQuizBtn(true);
  };

  /**
   * Handler when a user clicks to move to next question.
   */
  const moveToNextQuestion = () => {
    setAnswerStyles(initialStyles);
    setShowNextQuestionBtn(false);
    setIsAnswered(false);
    nextQuestion();
  };

  /**
   * Handler that check the selected answer of the user.
   * @param {*} e - event
   */
  const checkAnswer = (e) => {
    if (!isAnswered) {
      const selectedAnswer = e.target.innerText;
      let newStyles = Object.assign([], answerStyles);
      let timeoutAmount = 1500;
      if (selectedAnswer === parseEntities(correctAnswer)) {
        newStyles[e.target.id] = ANSWER_STYLE.CORRECT;
        answerFeedback(
          "alert-success",
          "Good Job! Correct.",
          true,
          timeoutAmount
        );
        increaseScore();
      } else {
        newStyles[e.target.id] = ANSWER_STYLE.INCORRECT;
        answerFeedback(
          "alert-danger",
          "Sorry...Incorrect.",
          true,
          timeoutAmount
        );
      }
      // time out for 1.5 seconds before displaying next question or finish quiz button
      // after a user has selected an answer
      setTimeout(() => handleQuestionAnswered(), timeoutAmount);
      setAnswerStyles(newStyles);
      setIsAnswered(true);
    }
  };

  return (
    <div className="d-flex mt-5 justify-content-center">
      <div className="card" style={{ maxWidth: "800px" }}>
        <div className="card-header">
          <div className="container">
            <div className="row">
              <div className="d-flex col-sm justify-content-center">
                <h3 className="text-center">
                  Question {questionNumber}/{questionCount}
                </h3>
              </div>
              <div className="d-flex col-sm align-items-center justify-content-center">
                <span className="badge rounded-pill bg-dark m-2">
                  {category}
                </span>
              </div>
              <div className="d-flex col-sm align-items-center justify-content-center">
                <span className="badge rounded-pill bg-dark m-2">
                  {difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body text-justify">
          <h5 className="card-title">{parseEntities(question)}</h5>
          <div id="action-feedback"></div>
          <Answers
            correctAnswer={correctAnswer}
            allAnswers={allAnswers}
            answerStyles={answerStyles}
            checkAnswer={checkAnswer}
            parseEntities={parseEntities}
          />
        </div>
        {showNextQuestionBtn ? (
          <div className="card-footer text-center">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => moveToNextQuestion()}
            >
              Next Question
            </button>
          </div>
        ) : null}
        {showFinishQuizBtn ? (
          <div className="card-footer text-center">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-toggle="modal"
              data-bs-target="#finishQuizModal"
            >
              Finish Quiz
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
