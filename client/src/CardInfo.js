import React from "react";
import { Link } from 'react-router-dom'

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

  function handleAddToCartClick() {
    console.log("Added to Cart!")
  }

  function handleCheckoutClick () {
    console.log("Checked out!")
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