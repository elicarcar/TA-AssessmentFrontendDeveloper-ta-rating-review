import React from "react";
import { FaStar } from "react-icons/fa";

const StarRate = ({ handleScore, score }) => {
  return (
    <div>
      <label>Your Score:</label>
      {[...Array(10)].map((star, i) => {
        const scoreVal = i + 1;
        return (
          <label>
            <FaStar color={scoreVal <= score ? "yellow" : "white"} />
            <input
              type="radio"
              name="score"
              size="small"
              value={scoreVal}
              onClick={(e) => handleScore(e)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRate;
