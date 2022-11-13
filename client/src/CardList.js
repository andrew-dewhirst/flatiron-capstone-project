import React from "react";
import CardInfo from "./CardInfo";

function CardList({ cart, filteredCards, cardsToDisplay, setCards }) {

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
 


  function handleCheckoutClick () {
    console.log("Checked out!")
  }

  return (
    <ul className="cards">
      {filteredCards.map((card) =>
      <CardInfo
        key={card.id}
        card={card}
        cart={cart}
        handleCheckoutClick={handleCheckoutClick}
      />
      )}
    </ul>
  );
}

export default CardList