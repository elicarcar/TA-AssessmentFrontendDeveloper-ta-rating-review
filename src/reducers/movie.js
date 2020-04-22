import { GET_MOVIES, MOVIE_FETCH_FAILED } from "../actions/types";

const initialState = {
  movies: [],
  movie: null,
  isLoading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: payload, isLoading: false };
    case MOVIE_FETCH_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
}
