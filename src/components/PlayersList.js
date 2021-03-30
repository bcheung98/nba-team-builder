import React from "react";
import Player from "./Player";

class PlayersList extends React.Component {
  render() {
    return (
      <div>
        <h1>Players</h1>
        <div className="player-display">
          <div className="player-container">
            {this.props.players.map(player=> <Player key={player.id} player={player} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersList;
