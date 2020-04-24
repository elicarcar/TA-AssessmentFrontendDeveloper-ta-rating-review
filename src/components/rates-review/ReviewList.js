import React from "react";
import { FaStar } from "react-icons/fa";
import Moment from "react-moment";

const ReviewList = ({ review }) => {
  return (
    <div className="review-list">
      <small>
        Created at {"  "}
        <Moment format={"DD/MM/YYYY"}>{review.created_at}</Moment>
      </small>
      <section>
        <span>
          <FaStar size={15} color="yellow" /> {review.score}/10
        </span>
        <div>
          <strong>Author:</strong> {review.author}
        </div>
        <p>{review.review}</p>
      </section>
    </div>
  );
};

export default ReviewList;
