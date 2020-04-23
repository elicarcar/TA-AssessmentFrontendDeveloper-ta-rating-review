import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StarRate from "./StarRate";
import Review from "./Review";

const RatesAndReview = (props) => {
  const handleScore = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="rating-review-block">
      <StarRate handleScore={handleScore} />
      <Review />
    </div>
  );
};

RatesAndReview.propTypes = {};

export default RatesAndReview;
