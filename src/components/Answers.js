import {useState } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

const addCorrectAnswerAndShuffle = (correctAnswer, otherAnswers) => {
  otherAnswers.push(correctAnswer);
  // return shuffleArray(otherAnswers);
  return otherAnswers;
}


const Answers = props => {
  const {correctAnswer, allAnswers, checkAnswer, answerStyles, parseEntities} = props;


  console.log(allAnswers);
  console.log(correctAnswer);

  return (
  <div className="container mt-4">
    {allAnswers.map((answer,index) => 
    <button key={index} id={index} type="button" className={answerStyles[index]} onClick={(e)=>checkAnswer(e)}>
      {parseEntities(answer)}
    </button>
    )}
  </div>
  )
}

export default Answers;