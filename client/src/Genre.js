import React from "react";
import { useParams } from 'react-router-dom';
import Search from "./Search";
import CardList from "./CardList";

function Genre( {cart, searchTerm, setSearchTerm, cardsToDisplay, setCards} ) {
  const params = useParams()

  const filteredCards = cardsToDisplay.filter((card) => card.genre.toLowerCase() === params.genre.toLowerCase())

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CardList cart={cart} filteredCards={filteredCards} cardsToDisplay={cardsToDisplay} setCards={setCards} />
    </div>
  )
}

export default Genre