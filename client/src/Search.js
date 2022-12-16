import React, { useContext } from 'react';
import { MyContext } from './Context'
import TextField from '@mui/material/TextField';

function Search() {
  const contextData = useContext(MyContext)

  function handleSearch(event) {
    contextData.setSearchTerm(event.target.value)
  }

  return (
    <TextField id="outlined-basic" label="Type a card to search..." variant="outlined" value={contextData.searchTerm} onChange={handleSearch} />
  );
}

export default Search