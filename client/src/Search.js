import React from "react";
import TextField from '@mui/material/TextField';

function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <TextField id="outlined-basic" label="Type a card to search..." variant="outlined" value={searchTerm} onChange={handleSearch} />
  );
}

export default Search