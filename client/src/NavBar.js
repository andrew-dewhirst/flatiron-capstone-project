import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {

  const navStyle = {
    display: "inline-block",
    width: "15%",
    padding: "12px",
    margin: "0 4% 6px",
    background: "black",
    color: "white",
    textAlign: "center",
  };

  return (
    <div>
      <NavLink to ="/"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Home
      </NavLink>
      <NavLink to ="/renovations"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        View All Renovations
      </NavLink>
      <NavLink to ="/my_renovations"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        View My Renovations
      </NavLink>
      <NavLink to ="/new_renovation"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Create New Renovation
      </NavLink>
    </div>
  )
}

export default NavBar
