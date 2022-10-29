import React from "react";
import { useParams } from 'react-router-dom';
import Search from "./Search";
import CardList from "./CardList";

function Genre( {searchTerm, setSearchTerm, cardsToDisplay, setCards} ) {
  const params = useParams()

  const filteredCards = cardsToDisplay.filter((card) => card.genre.toLowerCase() === params.genre.toLowerCase())

  console.log(filteredCards)

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CardList filteredCards={filteredCards} cardsToDisplay={cardsToDisplay} setCards={setCards} />
    </div>
  )
}

export default Genre



{/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
<StadiumList filteredStadiums = {filteredStadiums} stadiumsToDisplay={stadiumsToDisplay} setStadiums={setStadiums} /> */}