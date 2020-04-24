import {
  GET_MOVIES,
  MOVIE_FETCH_FAILED,
  GET_MOVIE,
  GET_MOVIE_SEARCH,
} from "../actions/types";

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
    case GET_MOVIE_SEARCH:
      return { ...state, movies: payload, isLoading: false };
    case GET_MOVIE:
      return { ...state, movie: payload, isLoading: false };
    case MOVIE_FETCH_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
}
