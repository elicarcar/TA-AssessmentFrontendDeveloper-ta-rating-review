import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getMovie } from "../actions/movie";
import PropTypes from "prop-types";
import MovieDetails from "../components/movie/MovieDetails";
import RatesAndReview from "../components/rates-review";
import { FaCircleNotch } from "react-icons/fa";

const AboutMovie = ({ match, movie: { movie, isLoading }, getMovie }) => {
  const getSingleMovie = "https://api.themoviedb.org/3/movie";
  useEffect(() => {
    getMovie(getSingleMovie, match.params.id);
  }, []);

  console.log(movie);
  return isLoading || movie === null ? (
    <FaCircleNotch />
  ) : (
    <Fragment>
      <MovieDetails movie={movie} />
      <RatesAndReview />
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
