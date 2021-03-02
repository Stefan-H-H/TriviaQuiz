import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://pages.github.ccs.neu.edu/cs7580sp21-seattle/stefan_hristov_assignment3">
          Trivia Quiz!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addProjectModal"
              >
                  {/* TO DO: Creat Configuration Form For Quizzes */}
                <FontAwesomeIcon icon={faCog} /> Configuration
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
