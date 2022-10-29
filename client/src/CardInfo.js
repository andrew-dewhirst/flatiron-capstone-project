import React from "react";

function CardInfo({ card }) {

//   function handleButtonClick() {
//     fetch(`http://localhost:3000/stadiums/${stadium.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         attended: !stadium.attended,
//       }),
//    })
//       .then((r) => r.json())
//       .then((updatedItem) => handleAttendanceClick(updatedItem));
// }

  return (
    <ul className="card">
      <h4>{card.name}</h4>
      <img src={card.image} alt={card.name} />
            <p>Description: {card.description}</p>
      <p>Price: {card.price} </p>
      {/* {stadium.attended ? (
        <button onClick={handleButtonClick}>Crossed off the List</button>
      ) : (
        <button onClick={handleButtonClick}>I've Been There!</button>
      )} */}
    </ul>
  );
}

export default CardInfo

//handleAttendanceClick - prop to be passed from CardList