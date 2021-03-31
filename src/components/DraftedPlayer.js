import React from "react";
import { Link } from "react-router-dom";
import teamMap from "./TeamMap";

const formatName = (name) => {
  name = name.split(" ");
  return `${name[0]}  ${name[1].toUpperCase()}`;
};

const formatHeight = (height) => {
  height = height.split("-");
  return `${height[0]} ft ${height[1]} in`;
};

const DraftedPlayer = (props) => {
  return (
    <div className="player-card" style={{backgroundColor: teamMap[props.player.team].color}}>
      <div className="player-info">
        <img
          className="player-team-img-card"
          src={teamMap[props.player.team].logo}
          alt={props.player.team}
        />
        <h3 className="player-name-card">{formatName(props.player.name)}</h3>
        <img
          className="player-img-card"
          src={props.player.img}
          alt={props.player.name}
        />
        <div className="player-details">
          <p><b>Height:</b> {formatHeight(props.player.height)}</p>
          <p><b>Weight:</b> {props.player.weight} lb</p>
          <p><b>Position</b>: {props.player.position}</p>
          <Link to={`/players/${props.player.id}`}>More Info</Link>
          <br />
          <button onClick={() => props.removePlayer(props.player)} className='button'>Undraft Player</button>
        </div>
      </div>
    </div>
  );
};

export default DraftedPlayer;
