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
 


  function handleCheckoutClick ({handleLineItemDelete}) {
    console.log("Checked out!")
  }

  return (
    <ul className="cards">
      {filteredCards.map((card) =>
      <CardInfo
        key={card.id}
        card={card}
        cart={cart}
        lineItems={card.line_items}
        handleCheckoutClick={handleCheckoutClick}
        handleAddLineItem={handleAddLineItem}
        handleLineItemDelete={handleLineItemDelete}
      />
      )}
    </ul>
  );
}

export default CardList