import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Question from "../components/Question";

const STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAIL: "fail"
}

const buildURL = (params) => {
  // TODO: build helper function for creating URL
}

const requestQuiz = async () => {
  // TODO: build URL & return response
  const baseURL = "https://opentdb.com/api.php"
  let response = await fetch(`${baseURL}?amount=10`)
  let quizData = await response.json();
  return quizData;
}

const App = () => {
  const[status, setStatus] = useState(STATUS.LOADING);
  const[responseCode, setResponseCode] = useState(0);
  const[categories, setCategories] = useState("any");
  const[Difficulty, setDifficulty] = useState("any");
  const[quizQuestions, setQuizQuestions] = useState(null);
  const[questionIdx, setQuestionIdx] = useState(null);
  const[questionCount, setQuestionCount] = useState(0);

  useEffect(() => {
    if (status === STATUS.LOADING){
      requestQuiz().then(data=>{
        console.log(data);
        setResponseCode(data["response_code"]);
        setQuizQuestions(data["results"])
        setQuestionIdx(0);
        setQuestionCount(data["results"].length)
        setStatus(STATUS.SUCCESS);
      }).catch(error=>{
        setStatus(STATUS.FAIL);
        console.log(error);
      })
    }
  },[status])


  return (
    <>
      <NavBar />
      {status === STATUS.LOADING 
        ? <h1>Loading...</h1> 
        : <Question 
            questionNumber={questionIdx + 1} 
            questionCount={questionCount} 
            question={quizQuestions[questionIdx]}
            />
      }
    </>

  )
}

export default App;