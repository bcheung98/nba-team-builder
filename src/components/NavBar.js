import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: 'max',
  padding: "5px",
  margin: "0 6px 6px 10px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  opacity: .8
};

const NavBar = (props) => {
  return (
    <div className='App-header'>
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/players" style={link}>
        Draft List
      </NavLink>
      <NavLink to="/team" style={link}>
        Drafted
      </NavLink>
      <div> Player Drafted: {props.team.length}</div>
    </div>
  );
};

export default NavBar;
