const Answers = (props) => {
  const {
    correctAnswer,
    allAnswers,
    checkAnswer,
    answerStyles,
    parseEntities,
  } = props;

  console.log(allAnswers);
  console.log(correctAnswer);

  return (
    <div className="container mt-4 d-grid text-sm-start">
      {allAnswers.map((answer, index) => (
        <button
          className="align-left"
          key={index}
          id={index}
          type="button"
          className={answerStyles[index]}
          onClick={(e) => checkAnswer(e)}
        >
          {parseEntities(answer)}
        </button>
      ))}
    </div>
  );
};

export default Answers;
