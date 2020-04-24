import React from "react";

const SearchInput = ({
  handleSearchChange,
  handleSearchClick,
  searchValue,
}) => {
  return (
    <div className="search-input">
      <form>
        <label>
          <input
            type="text"
            name="search"
            onChange={handleSearchChange}
            value={searchValue}
          />
          <button onClick={handleSearchClick}>Search Movie</button>
        </label>
      </form>
    </div>
  );
};

export default SearchInput;
