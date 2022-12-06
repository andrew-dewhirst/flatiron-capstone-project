import React from "react";
import CardInfo from "./CardInfo";

function CardList({ cart, lineItems, filteredCards, cardsToDisplay, setCards, handleAddLineItem, handleLineItemDelete }) {

  console.log(filteredCards)

  return (
    <ul className="cards">
      {filteredCards.map((card) =>
      <CardInfo
        key={card.id}
        card={card}
        cart={cart}
        lineItems={card.line_items}
        handleAddLineItem={handleAddLineItem}
        handleLineItemDelete={handleLineItemDelete}
      />
      )}
    </ul>
  );
}

export default CardList