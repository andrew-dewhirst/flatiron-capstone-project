import React from "react";
import { useParams } from 'react-router-dom';
// import Search from "./Search";
// import StadiumList from "./StadiumList";

function Genre( {searchTerm, setSearchTerm, cardsToDisplay, setCardsToDisplay} ) {
  const params = useParams()

  const filteredCards = cardsToDisplay.filter((card) => card.genre.toLowerCase() === params.genre.toLowerCase())

  console.log(filteredCards)

  return (
    <div>
      Testing
    </div>
  )
}

export default Genre

// { stadiumsToDisplay, setStadiums, searchTerm, setSearchTerm } - passed down from App.js

// const filteredStadiums = stadiumsToDisplay.filter((stadium) => stadium.league.toLowerCase() === params.league.toLowerCase()) - filtered views based on params

{/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
<StadiumList filteredStadiums = {filteredStadiums} stadiumsToDisplay={stadiumsToDisplay} setStadiums={setStadiums} /> */}