import React from "react";
import { useParams } from 'react-router-dom';
import Search from "./Search";
import CardList from "./CardList";

function Genre( {cart, lineItems, searchTerm, setSearchTerm, cardsToDisplay, setCards,handleAddLineItem, handleLineItemDelete} ) {
  const params = useParams()

  const filteredCards = cardsToDisplay.filter((card) => card.genre.toLowerCase() === params.genre.toLowerCase())

  console.log(lineItems.length)

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CardList cart={cart} lineItems={lineItems} filteredCards={filteredCards} cardsToDisplay={cardsToDisplay} setCards={setCards} handleAddLineItem={handleAddLineItem} handleLineItemDelete={handleLineItemDelete} />
    </div>
  )
}

export default Genre