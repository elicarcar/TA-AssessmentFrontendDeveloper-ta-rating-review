import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getMovies, getMovie } from "../actions/movie";
import MovieItem from "../components/movie/MovieItem";
import PropTypes from "prop-types";
import { FaCircleNotch } from "react-icons/fa";

const Homepage = ({ getMovies, movie: { movies, isLoading } }) => {
  console.log(movies);

  useEffect(() => {
    getMovies("https://api.themoviedb.org/3/movie/now_playing");
  }, [getMovies]);

  return !isLoading && movies.results !== undefined ? (
    <Fragment>
      <h2>Popular now!</h2>
      <div className="item-layout">
        {movies.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <FaCircleNotch />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

Homepage.propTypes = {};

export default connect(mapStateToProps, { getMovies })(Homepage);
