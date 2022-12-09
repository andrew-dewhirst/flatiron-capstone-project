import React from "react";
import GooglePayButton from "@google-pay/button-react";

function GooglePayItem({ user, cart }) {

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

  const isTop = window === window.top;

    function handlePaymentClick() {
    fetch(`http://localhost:3000/carts/${user.cart.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        has_converted: !user.cart.has_converted,
      }),
   })
      .then((r) => r.json())
      .then((updatedCart) => console.log(updatedCart));
}

  return (
    <div>
      <div className="demo">
        <GooglePayButton
          environment="TEST"
          buttonColor="default"
          buttonType="buy"
          buttonSizeMode="static"
          paymentRequest={paymentRequest}
          onClick = {handlePaymentClick}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: 240, height: 40 }}
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

export default GooglePayItem