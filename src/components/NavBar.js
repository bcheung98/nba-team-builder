import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: 'max',
  padding: "10px",
  margin: "0 6px 6px 10px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/players" style={link}>
        Draft List
      </NavLink>
      <NavLink to="/team" style={link}>
        Drafted Team
      </NavLink>
    </div>
  );
};

export default NavBar;
