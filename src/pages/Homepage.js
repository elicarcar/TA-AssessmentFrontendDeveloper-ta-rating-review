import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/movie";
import MovieItem from "../components/MovieItem";
import PropTypes from "prop-types";

const Homepage = ({ getMovies, movie: { movies, isLoading } }) => {
  console.log(movies);

  useEffect(() => {
    getMovies("https://api.themoviedb.org/3/movie/now_playing");
  }, []);

  return isLoading ? (
    <Fragment>Please wait</Fragment>
  ) : (
    <Fragment>
      <h2>Popular now!</h2>
      {movies.results.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

Homepage.propTypes = {};

export default connect(mapStateToProps, { getMovies })(Homepage);
