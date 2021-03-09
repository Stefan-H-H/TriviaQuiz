import { STATUS } from "../views/App";

const QuizSettings = (props) => {
  const {
    showSettings,
    categories,
    difficulties,
    amount,
    category,
    difficulty,
    updateParams,
    updateStatus,
    goToSettingsOrQuiz,
  } = props;

  const MIN_QUESTIONS = 1;
  const MAX_QUESTIONS = 50;

  /**
   * Handler for quiz configuration submission.
   * Fetches the quiz data from API and displays
   * Quiz questions to user.
   * @param {*} e - event
   */
  const formSubmit = (e) => {
    e.preventDefault();
    goToSettingsOrQuiz(true, false);
    updateStatus(STATUS.LOADING);
  };

  let isValidNumberOfQuestions =
    amount >= MIN_QUESTIONS && amount <= MAX_QUESTIONS;

  return (
    showSettings && (
      <div className="container mt-5" style={{ maxWidth: "800px" }}>
        <form onSubmit={formSubmit} className="needs-validation">
          <div>
            <label htmlFor="amount" className="form-label">
              Number of Questions:
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) =>
                updateParams({
                  amount: e.target.value,
                  category,
                  difficulty,
                })
              }
              min={MIN_QUESTIONS}
              max={MAX_QUESTIONS}
            />
          </div>
          <div
            className="invalid-feedback"
            style={
              !isValidNumberOfQuestions
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {`Please provide a number between ${MIN_QUESTIONS} - ${MAX_QUESTIONS}.`}
          </div>
          <div className="mt-3">
            <label htmlFor="triviaCategory" className="form-label">
              Select Category:
            </label>
            <select
              className="form-select"
              id="triviaCategory"
              value={category}
              onChange={(e) =>
                updateParams({
                  amount,
                  category: e.target.value,
                  difficulty,
                })
              }
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="triviaDifficulty" className="form-label">
              Select Difficulty:
            </label>
            <select
              className="form-select"
              id="triviaDifficulty"
              value={difficulty}
              onChange={(e) =>
                updateParams({
                  amount,
                  category,
                  difficulty: e.target.value,
                })
              }
            >
              {difficulties.map((difficulty, index) => (
                <option key={index} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValidNumberOfQuestions}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default QuizSettings;
