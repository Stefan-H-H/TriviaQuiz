import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { STATUS } from "../views/App";

const NoMatchMessage = (props) => {
  const { status, responseCode, setResponseCode, setShowSettings } = props;

  const goToSettings = () => {
    setResponseCode(0);
    setShowSettings(true);
  };

  return (
    responseCode === 1 &&
    status === STATUS.SUCCESS && (
      <div className="container text-xl-center mt-5">
        <p>
          Sorry, we don't have enough questions that match your selected
          criteria. Please change your selected criteria and try again.
        </p>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => goToSettings()}
          >
            <FontAwesomeIcon icon={faCog} /> Trivia Criteria
          </button>
        </div>
      </div>
    )
  );
};

export default NoMatchMessage;
