import {
  ADD_REVIEW,
  REVIEWS_FETCH_FAILED,
  GET_REVIEWS,
} from "../actions/types";

const initialState = {
  reviews: [],
  review: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return { ...state, reviews: [payload, ...state.reviews] };
    case GET_REVIEWS:
      return { ...state, reviews: [payload] };

    case REVIEWS_FETCH_FAILED:
      return state;
    default:
      return state;
  }
}
