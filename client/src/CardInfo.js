import React from "react";
import { Link } from 'react-router-dom'

function CardInfo({ cart, card, handleCheckoutClick }) {

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

// function handleAddToCartClick() {
//   console.log(card)
//   console.log(card.id)
// }

function handleAddToCartClick() {
  fetch("/line_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_id: card.id,
      cart_id: 1,
      quantity: 1,
    }),
  })
    .then((r) => r.json())
    .then((newLineItem) => console.log(newLineItem));
}

  return (
    <ul className="card">
      <h4>{card.name}</h4>
      <img src={card.image} alt={card.name} />
            <p>Description: {card.description}</p>
      <p>Price: {card.price} </p>
      <button onClick={handleAddToCartClick}>Add To Cart</button>
      <Link to="/checkout">
        <button onClick={handleCheckoutClick}>Checkout</button>
      </Link>
    </ul>
  );
}

export default CardInfo

//handleAttendanceClick - prop to be passed from CardList