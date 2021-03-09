const Answers = (props) => {
  const { allAnswers, checkAnswer, answerStyles, parseEntities } = props;

  return (
    <div className="answers container mt-4 d-grid">
      {allAnswers.map((answer, index) => (
        <button
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
