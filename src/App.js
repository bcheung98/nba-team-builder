import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PlayersList from "./components/PlayersList";
import Team from "./components/Team";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MoreInfo from "./components/MoreInfo"

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
        <main>
        <Switch>
          <Route exact path="/" component={Home} />
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
                (player) => Number(routerProps.match.params.id) === player.id
              );
              return <MoreInfo player={player} />;
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
