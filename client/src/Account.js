import React, { useEffect, useState } from "react";
import Login from "./Login";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Account({ user, avatar }) {

  const [errors, setErrors] = useState([]);
  console.log(user.user)
  console.log(user)
  const [itemCount, setItemCount] = React.useState(1);

  // if (!user) return (
  //   <div>
  //     <h3>{errors}</h3>
  //     <Login onLogin={setUser} setErrors={setErrors} />;
  //   </div>
  // )
  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>How to create ShoppingCart Button in ReactJS?</h4>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Account

// Welcome Home {user?.user?.first_name} {user?.user?.last_name}!