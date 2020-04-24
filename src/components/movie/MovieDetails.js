import React, { Fragment } from "react";
import PropTypes from "prop-types";

const MovieDetails = ({ movie }) => {
  const poster_path = "https://image.tmdb.org/t/p/w342";
  const backdrop_path = "https://image.tmdb.org/t/p/w780";

  return (
    <Fragment>
      <div
        className="movie-details"
        style={{
          backgroundImage: `url(${backdrop_path + movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="inner-bg-style">
          <img src={poster_path + movie.poster_path} />
          <div className="info-style-flex">
            <h3>{movie.title}</h3>
            <p>
              <strong>Overview:</strong> {movie.overview}
            </p>
            <ul>
              <h6>Genres</h6>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
