import { useState } from "react";
import Answers from "./Answers";
const MAX_ANSWERS = 4;

// Parse Unicode
const parseEntities = (txt) =>
  new DOMParser().parseFromString(txt, "text/html").body.innerText;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

const getAllAnswers = (correctAnswer, otherAnswers) => {
  let answers = [];
  Object.assign(answers, otherAnswers);
  answers.push(correctAnswer);
  return answers
}

const ANSWER_STYLE = {
  REGULAR: "btn btn-primary m-2",
  INCORRECT: "btn btn-danger m-2",
  CORRECT: "btn btn-success m-2"

}

const Question = (props) => {
  const initialStyles = Array(MAX_ANSWERS).fill(ANSWER_STYLE.REGULAR);
  const [answerStyles, setAnswerStyles] = useState(initialStyles);
  const [showNextQuestionBtn, setShowNextQuestionBtn] = useState(false);
  const [showFinishQuizBtn, setShowFinishQuizBtn] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const {questionNumber, questionCount, nextQuestion, increaseScore} = props;
  let correctAnswer = props.question["correct_answer"];
  let question = props.question["question"];
  let category = props.question["category"];
  let difficulty = props.question["difficulty"];
  let otherAnswers = props.question["incorrect_answers"];

  const handleQuestionAnswered = () => {
    questionNumber < questionCount ? setShowNextQuestionBtn(true) : setShowFinishQuizBtn(true);
  };

  const moveToNextQuestion = () => {
    setAnswerStyles(initialStyles);
    setShowNextQuestionBtn(false);
    setIsAnswered(false);
    nextQuestion();
  }

  const checkAnswer = (e) => {
    console.log(e);
    if(!isAnswered) {
      const selectedAnswer = e.target.innerText;
      let newStyles = Object.assign([], answerStyles);
      console.log(e);
      if (selectedAnswer === parseEntities(correctAnswer)){
        console.log("Correct!");
        newStyles[e.target.id] = ANSWER_STYLE.CORRECT;
        increaseScore();
      }
      else {
        console.log("wrong")
        newStyles[e.target.id] = ANSWER_STYLE.INCORRECT;
      }
      setAnswerStyles(newStyles);
      setIsAnswered(true);
      handleQuestionAnswered();
    }
  }

  // console.log(addCorrectAnswerAndShuffle(correctAnswer, otherAnswers));

  return (
    // TODO: Need to set Maximum Width for the Card
    // How to make sure the category, difficult, and question render?
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3 className="float-start">
            Question {questionNumber}/{questionCount}
          </h3>
          <span className="cat badge rounded-pill bg-dark float-end">
            {category}
          </span>
          <span className="cat badge rounded-pill bg-dark float-end">
            {difficulty}
          </span>
        </div>
        <div className="card-body text-lg-center">
          <h5 className="card-title">{parseEntities(question)}</h5>
          <Answers
            correctAnswer={correctAnswer}
            allAnswers={getAllAnswers(correctAnswer, otherAnswers)}
            answerStyles={answerStyles}
            checkAnswer={checkAnswer}
            parseEntities ={parseEntities}
          />
        </div>
        {showNextQuestionBtn ? (
          <div className="card-footer text-center">
            <button type="button" className="btn btn-dark" onClick={() => moveToNextQuestion()}>
              Next Question
            </button>
          </div>
        ) : null}
        {showFinishQuizBtn ? (
          <div className="card-footer text-center">
            <button type="button" className="btn btn-dark" data-bs-toggle="modal"
                data-bs-target="#finishQuizModal">
              Finish Quiz
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
