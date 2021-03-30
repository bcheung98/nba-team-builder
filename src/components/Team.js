import React from "react";
// import Player from "./Player";

// const API2 = "http://localhost:3000/team";

class Team extends React.Component {
  state = {
    team: [],
  };

  // componentDidMount() {
  //   fetch(API2)
  //     .then((r) => r.json())
  //     .then((team) => this.setState({ team }));
  // }

  render() {
  
    return (
      <div>
        <h1>Team</h1>
        {/* {this.state.team.map((player) => (
          <Player key={player.id} player={player} />
        ))} */}
      </div>
    );
  }
}

export default Team;
