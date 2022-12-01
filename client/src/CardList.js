import React from "react";
import CardInfo from "./CardInfo";

function CardList({ cart, lineItems, filteredCards, cardsToDisplay, setCards, handleAddLineItem, handleLineItemDelete }) {

  // function handleAttendanceClick(updatedItem) {
  //   const updatedStadiums = stadiumsToDisplay.map((stadium) => {
  //     if (stadium.id === updatedItem.id) {
  //       return updatedItem;
  //     } else {
  //       return stadium;
  //     }
  //   });
  //   setStadiums(updatedStadiums);
  // }
 



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