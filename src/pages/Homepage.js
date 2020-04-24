import React, { useEffect, Fragment, useState, useCallback } from "react";
import { connect } from "react-redux";
import { getMovies, getMovie, getMovieSearch } from "../actions/movie";
import MovieItem from "../components/movie/MovieItem";
import SearchInput from "../components/movie/SearchInput";
import Spinner from "../layouts/spinner/Spinner";
import PropTypes from "prop-types";

const Homepage = ({
  getMovies,
  getMovieSearch,
  movie: { movies, isLoading },
}) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getMovies("https://api.themoviedb.org/3/movie/now_playing");
  }, [getMovies]);

  const handleSearchClick = useCallback(
    (e) => {
      e.preventDefault();
      getMovieSearch(searchValue);
    },
    [searchValue]
  );

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    handleSearchClick(e);
  };

  return (
    <Fragment>
      <SearchInput
        handleSearchChange={(e) => handleSearchChange(e)}
        handleSearchClick={(e) => handleSearchClick(e)}
        searchValue={searchValue}
      />
      {!isLoading && movies.results !== undefined ? (
        <Fragment>
          <div className="item-layout">
            {movies.results.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Spinner />
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

Homepage.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getMovies, getMovieSearch })(
  Homepage
);
