import React, { useEffect, useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Cart({ lineItems, user }) {

  console.log(user.cart)

  const cartIconCount = lineItems.filter((lineItem) => lineItem.cart_id == user?.cart?.id).length

  console.log(cartIconCount)


  function handleCheckoutClick(){
    window.location.href='/checkout'
  }

  return (
    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={cartIconCount}>
          <ShoppingCartIcon onClick={handleCheckoutClick} />{" "}
        </Badge>
      </div>
    </div>
  );
}

export default Cart