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
      <NavLink to ="/genre/pokemon"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        Pokemon
      </NavLink>
      <NavLink to ="/genre/mlb"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        MLB
      </NavLink>
      <NavLink to ="/genre/nba"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        NBA
      </NavLink>
      <NavLink to ="/genre/nhl"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        NHL
      </NavLink>
      <NavLink to ="/genre/nfl"
      exact
      style={navStyle}
      activeStyle={{background: "#696969"}}
      >
        NFL
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
