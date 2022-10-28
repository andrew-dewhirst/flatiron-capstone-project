import React from "react";

function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Cards:</label>
      <input
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a card to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search