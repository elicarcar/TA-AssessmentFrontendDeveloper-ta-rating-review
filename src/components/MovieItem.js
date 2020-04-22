import React from "react";
import PropTypes from "prop-types";

const MovieItem = ({ movie }) => {
  const poster_path = "https://image.tmdb.org/t/p/w185";

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={poster_path + movie.poster_path} />
    </div>
  );
};

MovieItem.propTypes = {};

export default MovieItem;
