import axios from "axios";
import { GET_MOVIES, GET_MOVIE, MOVIE_FETCH_FAILED } from "./types";

export const getMovies = (url) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${url}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    );

    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FETCH_FAILED,
      payload: error.message,
    });
  }
};

export const getMovie = (url, movieId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${url}/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    );

    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FETCH_FAILED,
      payload: error.message,
    });
  }
};
