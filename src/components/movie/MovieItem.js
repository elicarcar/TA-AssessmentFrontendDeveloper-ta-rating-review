import React from "react";
import { Link } from "react-router-dom";
import "../../App.less";
import PropTypes from "prop-types";

const MovieItem = ({ movie }) => {
  const poster_path = "https://image.tmdb.org/t/p/w185";

  return (
    <Link to={`movie/${movie.id}`}>
      <div className="movie-item">
        <h3>{movie.title}</h3>
        <img src={poster_path + movie.poster_path} />
      </div>
    </Link>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
