import { Modal } from "bootstrap";

const FinalScoreModal = (props) => {
  const { score, questionCount, updateScore, goToSettingsOrQuiz } = props;

  /**
   * Handler when user clicks the "Start New Quiz" button.
   * Sends user back to Settings view.
   */
  const startNewQuiz = () => {
    let finalScoreModalDiv = document.getElementById("finishQuizModal");
    let finishQuizModal = Modal.getInstance(finalScoreModalDiv);
    finishQuizModal.hide();
    goToSettingsOrQuiz(false, true);
    updateScore(0);
  };

  return (
    <div
      className="modal fade"
      id="finishQuizModal"
      tabIndex="-1"
      aria-labelledby="finishQuizModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="finishQuizModalLabel">
              Quiz Score!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            <h3>
              Your score: {score}/{questionCount}
            </h3>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => startNewQuiz()}
            >
              Start New Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalScoreModal;
