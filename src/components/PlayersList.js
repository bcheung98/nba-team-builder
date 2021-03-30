import React from "react";
import Player from "./Player";

class PlayersList extends React.Component {
  render() {
    return (
      <div>
        <h1>Players</h1>
        {this.props.players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    );
  }
}

export default PlayersList;
