import React from "react";
import Filters from "./Filters";
import Player from "./Player";

class PlayersList extends React.Component {

  state = {
    team: "all",
    position: "all"
  }

  setTeamFilters = (e) => {
    this.setState({ team: e.target.value })
  }

  setPositionFilters = (e) => {
    this.setState({ position: e.target.value })
  }

  filterPlayers = () => {
    let players = [...this.props.players]
    if (this.state.team !== "all") {
      players = players.filter(p => this.state.team === p.team);
    }
    if (this.state.position !== "all") {
      players = players.filter(p => p.position.split("/").includes(this.state.position));
    }
    return players;
  }

  render() {
    return (
      <div>
        <h1>Players</h1>
        <Filters setTeam={this.setTeamFilters} setPosition={this.setPositionFilters} />
        <div className="player-display">
          <div className="player-container">
            {this.filterPlayers().map(player => <Player key={player.id} player={player}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersList;
