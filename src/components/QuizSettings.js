import { useState } from "react";
import { ANY_CATEGORY, ANY_DIFFICULTY } from "../data/data";
import {STATUS} from  '../views/App';

const QuizSettings = (props) => {
  const {
    categories,
    difficulties,
    amount,
    category,
    difficulty,
    updateParams,
    updateStatus,
    updateShowQuiz,
    updateShowSettings,
  } = props;

  const formSubmit = (e) => {
    e.preventDefault();
    updateShowQuiz(true);
    updateShowSettings(false);
    updateStatus(STATUS.LOADING);
  };

  let isValidNumberOfQuestions =
    amount >= 1 && amount <= 50;

  return (
    <div className="container mt-5">
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
            min="1"
            max="50"
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
          Please provide a number between 1 - 50.
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
  );
};

export default QuizSettings;
