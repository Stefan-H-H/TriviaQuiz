import Answers from "./Answers"


const Question = props => {

  return(
    // TODO: Need to set Maximum Width for the Card
    // How to render unicode???
    // How to make sure the category, difficult, and question render?
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          <h3 className="float-start">Question {props.questionNumber}/{props.questionCount}</h3>
          <span className="cat badge rounded-pill bg-dark float-end">
            {props.question["category"]}
          </span>
          <span className="cat badge rounded-pill bg-dark float-end">
          {props.question["difficulty"]}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.question["question"]}</h5>
          {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          <Answers />
        </div>
        <div className="card-footer">
          {/* <div class="container">
            <div class="row">
              <div class="col">
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div class="col">
                <button type="button" className="btn btn-primary">
                  Next Question
                </button>
              </div>
            </div>
          </div> */}
          <button type="button" className="btn btn-primary">
            Next Question
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question;