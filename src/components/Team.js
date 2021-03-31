import React from "react";
import DraftedPlayer from "./DraftedPlayer";

const Team = (props) => {
  return (
    <div>
      <h1>Team</h1>
      {props.team.map((player) => (
        <DraftedPlayer
          key={player.id}
          player={player}
          removePlayer={props.removePlayer}
        />
      ))}
    </div>
  );
};

export default Team;
