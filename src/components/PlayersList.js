import React from "react";
import Filters from "./Filters";
import Player from "./Player";

class PlayersList extends React.Component {

  state = {
    players: "",
    team: "all",
    position: "all"
  }

  searchPlayer = (e) => {
    this.setState({players: e.target.value})
  }

  setTeamFilters = (e) => {
    this.setState({ team: e.target.value })
  }

  setPositionFilters = (e) => {
    this.setState({ position: e.target.value })
  }

  filterPlayers = () => {
    let players = [...this.props.players]
    if (this.state.players !== "") {
      players = players.filter(p => p.name.toLowerCase().includes(this.state.players.toLowerCase()));
    }
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
        <div>
          <input onChange={this.searchPlayer} type="text" placeholder="Search for a player" />
        </div>
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
