import React from 'react';
import Player from './Player'

const API = "http://localhost:3000/players";


class PlayersList extends React.Component {

  state = {
    players: [],
  };

  componentDidMount() {
    fetch(API)
      .then((r) => r.json())
      .then((players) => this.setState({ players }));
  }

  render() {
    return (
      <div>
        <h1>Players</h1>
        <div className="player-display">
          <div className="player-container">
            {this.state.players.map(player=> <Player key={player.id} player={player} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersList;