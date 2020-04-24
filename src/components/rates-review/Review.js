import React from "react";
import PropTypes from "prop-types";

const Review = ({ handleSubmit, handleChange, author, review }) => {
  return (
    <div className="review">
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Your Name</label>

        <input
          type="text"
          name="author"
          placeholder="Your name.."
          value={author}
          onChange={(e) => handleChange(e)}
          required
        />

        <label>Review</label>

        <textarea
          name="review"
          placeholder="Did you watch the movie? Share your thoughts.."
          style={{ height: "200px" }}
          value={review}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>

        <div>
          <input type="submit" value="Post Review" />
        </div>
      </form>
    </div>
  );
};

Review.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default Review;
