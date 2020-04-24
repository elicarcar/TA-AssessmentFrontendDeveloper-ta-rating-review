import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import StarRate from "./StarRate";
import Review from "./Review";
import { FaPlusSquare } from "react-icons/fa";
import { connect } from "react-redux";
import { addReview, getReviews } from "../../actions/review";
import "../../App.less";
import ReviewList from "./ReviewList";

const RatesAndReview = ({ addReview, id, review: { reviews } }) => {
  const [displayAddReview, setDisplayAddReview] = useState(false);
  const dumbReviews = [];
  const [reviewForm, setReviewForm] = useState({
    author: "",
    review: "",
    created_at: new Date(Date.now()),
    score: 0,
    movieId: id,
  });

  const { author, review, score } = reviewForm;

  const matchedReviews = reviews.filter((review) => review.movieId === id);
  useEffect(() => {
    getReviews();
  }, [reviews]);

  const handleScore = (e) => {
    setReviewForm({ ...reviewForm, score: e.target.value });
  };

  const handleChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(reviewForm);
    setDisplayAddReview(!displayAddReview);
  };
  return (
    <Fragment>
      <div className="header-primary">
        <h2>Reviews</h2>
        <FaPlusSquare
          size="40"
          color="white"
          onClick={() => setDisplayAddReview(!displayAddReview)}
        />
      </div>

      {displayAddReview && (
        <div className="rating-review-block">
          <StarRate handleScore={handleScore} score={score} />
          <Review
            author={author}
            review={review}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
      {matchedReviews.length > 0 ? (
        <ul>
          {matchedReviews.map((review) => (
            <ReviewList review={review} />
          ))}
        </ul>
      ) : (
        <p className="p-notify">There are no Reviews yet for this movie.</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  review: state.review,
});
RatesAndReview.propTypes = {};

export default connect(mapStateToProps, { addReview })(RatesAndReview);
