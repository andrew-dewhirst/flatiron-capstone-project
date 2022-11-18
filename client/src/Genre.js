import React from "react";
import { useParams } from 'react-router-dom';
import Search from "./Search";
import CardList from "./CardList";

function Genre( {cart, lineItems, searchTerm, setSearchTerm, cardsToDisplay, setCards, handleLineItemDelete} ) {
  const params = useParams()

  const filteredCards = cardsToDisplay.filter((card) => card.genre.toLowerCase() === params.genre.toLowerCase())

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CardList cart={cart} lineItems={lineItems} filteredCards={filteredCards} cardsToDisplay={cardsToDisplay} setCards={setCards} handleLineItemDelete={handleLineItemDelete} />
    </div>
  )
}

export default Genre