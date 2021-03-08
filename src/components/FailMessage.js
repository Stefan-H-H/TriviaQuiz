import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { STATUS } from "../views/App";

const FailMessage = (props) => {
  const { status, goToSettingsOrQuiz, showSettings } = props;

  return (
    !showSettings &&
    status === STATUS.FAIL && (
      <div className="container text-lg-center mt-5">
        <p>Oops... Something went wrong. Please try again.</p>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goToSettingsOrQuiz(false, true)}
          >
            <FontAwesomeIcon icon={faCog} /> Trivia Criteria
          </button>
        </div>
      </div>
    )
  );
};

export default FailMessage;
