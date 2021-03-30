import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PlayersList from "./components/PlayersList";
import Team from "./components/Team";
import Player from "./components/Player";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const API = "http://localhost:3000/players";

class App extends React.Component {
  state = {
    players: [],
    team: [],
  };

  componentDidMount() {
    fetch(API)
      .then((r) => r.json())
      .then((players) => this.setState({ players }));
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>

        <Switch>
          <Route path="/team" component={Team} />
          <Route
            exact path="/players"
            render={() => {
              return <PlayersList players={this.state.players} setTeam={this.setTeamFilters} />;
            }}
          />
          <Route
            exact path="/players/:id"
            render={(routerProps) => {
              let player = this.state.players.find(
                (player) => routerProps.match.params.id === player.id
              );
              return <Player player={player} />;
            }}
          />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
