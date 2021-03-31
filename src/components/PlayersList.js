import React from "react";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Player from "./Player";
import DraftedPlayer from "./DraftedPlayer";

class PlayersList extends React.Component {

  state = {
    sort: "name-AZ",
    filters: {
      players: "",
      team: "all",
      position: "all",
      draft: "all",
    }
  }

  heightToInches = (height) => {
    height = height.split("-");
    return (parseInt(height[0]) * 12) + parseInt(height[1]);
  }

  setSortSettings = (e) => {
    this.setState({ sort: e.target.value }, () => this.sortPlayers());
  }

  sortPlayers = () => {
    let players = [...this.props.players]
    switch (this.state.sort) {
      case "name-AZ":
        players.sort((a, b) => a.name.split(" ").reverse().join(" ") < b.name.split(" ").reverse().join(" ") ? -1 : 1);
        break;
      case "name-ZA":
        players.sort((a, b) => a.name.split(" ").reverse().join(" ") < b.name.split(" ").reverse().join(" ") ? 1 : -1);
        break;
      case "height-asc":
        players.sort((a, b) => this.heightToInches(a.height) < this.heightToInches(b.height) ? -1 : 1);
        break;
      case "height-desc":
        players.sort((a, b) => this.heightToInches(a.height) < this.heightToInches(b.height) ? 1 : -1);
        break;
      case "weight-asc":
        players.sort((a, b) => a.weight < b.weight ? -1 : 1);
        break;
      case "weight-desc":
        players.sort((a, b) => a.weight < b.weight ? 1 : -1);
        break;
      default:
        break;
    }
    return players
  }

  searchPlayer = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        players: e.target.value
      }
    });
  }

  setTeamFilters = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        team: e.target.value
      }
    });
  }

  setPositionFilters = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        position: e.target.value
      }
    });
  }

  setDraftFilters = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        draft: e.target.value
      }
    });
  }

  filterPlayers = () => {
    let players = this.sortPlayers();
    if (this.state.filters.players !== "") {
      players = players.filter(p => p.name.toLowerCase().includes(this.state.filters.players.toLowerCase()));
    }
    if (this.state.filters.team !== "all") {
      players = players.filter(p => this.state.filters.team === p.team);
    }
    if (this.state.filters.position !== "all") {
      players = players.filter(p => p.position.split("/").includes(this.state.filters.position));
    }
    if (this.state.filters.draft !== "all") {
      players = players.filter(p => this.state.filters.draft === p.draft.split(" ")[0]);
    }
    return players;
  }

  render() {
    return (
      <div>
        {this.props.display === "players" ? <h1>Players</h1> : <h1>My Team</h1>}
        <div>
          <input onChange={this.searchPlayer} type="text" placeholder="Search for a player" />
        </div>
        <Filters setTeam={this.setTeamFilters} setPosition={this.setPositionFilters} setDraftYear={this.setDraftFilters} />
        <SortBar onChange={this.setSortSettings} />
        <div className="player-display">
          <div className="player-container">
            {this.props.display === "players" ?
              this.filterPlayers().map(player => <Player key={player.id} player={player} />) :
              this.filterPlayers().map(player => <DraftedPlayer key={player.id} player={player} removePlayer={this.props.removePlayer} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayersList;
