import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => {
  return (
    <div>
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/team" style={link}>
        Drafted Team
      </NavLink>
      <NavLink to="/playerslist" style={link}>
        Draft List
      </NavLink>
      <NavLink to="/player" style={link}>
        Player Info
      </NavLink>
    </div>
  );
};

export default NavBar;