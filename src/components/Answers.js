const Answers = props => {
  return (
  <div className="container">
    <div className="row mb-3">
      <div className="col">
        <button type="button" className="btn btn-primary">
          <span>A</span> First Answer
        </button>
      </div>
      <div className="col">
        <button type="button" className="btn btn-primary">
          <span>B</span> Second Answer
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button type="button" className="btn btn-primary">
          <span>C</span> Third Answer
        </button>
      </div>
      <div className="col">
        <button type="button" className="btn btn-primary">
          <span>D</span> Fourth Answer
        </button>
      </div>
    </div>
  </div>
  )
}

export default Answers;