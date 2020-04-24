import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getMovie } from "../actions/movie";
import PropTypes from "prop-types";
import MovieDetails from "../components/movie/MovieDetails";
import RatesAndReview from "../components/rates-review";
import Spinner from "../layouts/spinner/Spinner";

const AboutMovie = ({ match, movie: { movie, isLoading }, getMovie }) => {
  const getSingleMovie = "https://api.themoviedb.org/3/movie";
  const movieId = match.params.id;
  useEffect(() => {
    getMovie(getSingleMovie, match.params.id);
  }, []);

  return isLoading || movie === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <MovieDetails movie={movie} />
      <RatesAndReview id={movieId} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

AboutMovie.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getMovie })(AboutMovie);
