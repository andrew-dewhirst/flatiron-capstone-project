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
      <NavLink to ="/cards/pokemon"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Pokemon
      </NavLink>
      <NavLink to ="/cards/baseball"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Baseball
      </NavLink>
      <NavLink to ="/cards/basketball"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Basketball
      </NavLink>
      <NavLink to ="/cards/hockey"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Hockey
      </NavLink>
      <NavLink to ="/cards/football"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Football
      </NavLink>
      <NavLink to ="/myaccount"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        My Account
      </NavLink>
    </div>
  )
}

export default NavBar
