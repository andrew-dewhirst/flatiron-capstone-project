import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
// import "./style.css";

function CheckoutForm({ user, cards, cart }) {

  const cartItems = user?.line_items?.filter((lineItem) => lineItem.cart_id == user.cart.id)
  console.log(cartItems)

  console.log(cards)

  console.log(user.cart.id)

  const cartTotalPerCard = (cards.map((card) => card.line_items.filter((lineItem) => lineItem.cart_id == user.cart.id).length*card.price))

  console.log(cartTotalPerCard)

  const cartTotal =  cartTotalPerCard?.reduce((result,price)=> result+price, 0);
  console.log(cartTotal)

  

  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  const [buttonColor, setButtonColor] = useState("default");
  const [buttonType, setButtonType] = useState("buy");
  const [buttonSizeMode, setButtonSizeMode] = useState("static");
  const [buttonWidth, setButtonWidth] = useState(240);
  const [buttonHeight, setButtonHeight] = useState(40);

  const isTop = window === window.top;


    function handlePaymentClick() {
    fetch(`http://localhost:3000/carts/${cart.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        has_converted: !cart.has_converted,
      }),
   })
      .then((r) => r.json())
      .then((updatedCart) => console.log(updatedCart));
}

  return (
    <div>
      <h3>Products: </h3>
      <h3>Total Owed: ${cartTotal}.00</h3>
      <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor={buttonColor}
          buttonType={buttonType}
          buttonSizeMode={buttonSizeMode}
          paymentRequest={paymentRequest}
          onClick = {handlePaymentClick}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: buttonWidth, height: buttonHeight }}
        />
      </div>

      <div className="note" style={{ display: isTop ? "none" : "" }}>
        <p>
          Note: This page may need to open in a new window for it to function
          correctly.
        </p>
        <p>
          <a href="/" target="_blank">
            Open in new window
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default CheckoutForm