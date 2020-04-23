import React from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const StarRate = ({ handleScore }) => {
  return (
    <div>
      {[...Array(10)].map((star, i) => {
        const scoreVal = i + 1;
        return (
          <label>
            <FaStar />
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

StarRate.propTypes = {};

export default StarRate;
