import React from "react";
import Player from "./Player";

const Team = (props) => {
  return (
    <div>
      <h1>Team</h1>
      {props.team.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Team;
