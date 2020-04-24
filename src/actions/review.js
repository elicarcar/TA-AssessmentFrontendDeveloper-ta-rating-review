import { ADD_REVIEW, GET_REVIEWS, REVIEWS_FETCH_FAILED } from "./types";

export const addReview = (reviewForm) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_REVIEW,
      payload: reviewForm,
    });
  } catch (error) {
    dispatch({
      type: REVIEWS_FETCH_FAILED,
      payload: error.response.statusText,
    });
  }
};

export const getReviews = () => (dispatch) => {
  try {
    const currReviews = JSON.parse(localStorage.getItem("reviews"));

    dispatch({
      type: GET_REVIEWS,
      payload: currReviews,
    });
  } catch (error) {
    dispatch({
      type: REVIEWS_FETCH_FAILED,
      payload: error.response.statusText,
    });
  }
};
