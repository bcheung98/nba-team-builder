import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PlayersList from "./components/PlayersList";
import Team from "./components/Team";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MoreInfo from "./components/MoreInfo";

const API1 = "https://bcheung98.github.io/nba-player-db/players.json";


class App extends React.Component {
  state = {
    players: [],
  };

  componentDidMount() {
    fetch(API1)
      .then((r) => r.json())
      .then((players) => this.setState({ players }))
  }

  addPlayer = (player) => {
    fetch('http://localhost:3000/team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    })
    .then(r=>r.json())
    .then(player=> console.log(player))
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact path="/team" component={Team}
            />
            <Route
              exact
              path="/players"
              render={() => {
                return (
                  <PlayersList
                    players={this.state.players}
                    setTeam={this.setTeamFilters}
                  />
                );
              }}
            />
            <Route
              exact
              path="/players/:id"
              render={(routerProps) => {
                let player = this.state.players.find(
                  (player) => Number(routerProps.match.params.id) === player.id
                );
                return <MoreInfo player={player} addPlayer={this.addPlayer}/>;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
