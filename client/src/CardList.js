import React from "react";
import CardInfo from "./CardInfo";

function CardList({ filteredCards, cardsToDisplay, setCards }) {

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
        stadium={stadium}
        // handleAttendanceClick={handleAttendanceClick}
      />
      )}
    </ul>
  );
}

export default CardList