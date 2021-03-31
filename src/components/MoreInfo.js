import React from "react";

const teamMap = {
  ATL: ["1610612737", "Atlanta Hawks"],
  BOS: ["1610612738", "Boston Celtics"],
  CLE: ["1610612739", "Cleveland Cavaliers"],
  NOP: ["1610612740", "New Orleans Pelicans"],
  CHI: ["1610612741", "Chicago Bulls"],
  DAL: ["1610612742", "Dallas Mavericks"],
  DEN: ["1610612743", "Denver Nuggets"],
  GSW: ["1610612744", "Golden State Warriors"],
  HOU: ["1610612745", "Houston Rockets"],
  LAC: ["1610612746", "Los Angeles Clippers"],
  LAL: ["1610612747", "Los Angeles Lakers"],
  MIA: ["1610612748", "Miami Heat"],
  MIL: ["1610612749", "Milwaukee Bucks"],
  MIN: ["1610612750", "Minnesota Timberwolves"],
  BKN: ["1610612751", "Brooklyn Nets"],
  NYK: ["1610612752", "New York Knicks"],
  ORL: ["1610612753", "Orlando Magic"],
  IND: ["1610612754", "Indiana Pacers"],
  PHI: ["1610612755", "Philadelphia 76ers"],
  PHX: ["1610612756", "Phoenix Suns"],
  POR: ["1610612757", "Portland Trail Blazers"],
  SAC: ["1610612758", "Sacramento Kings"],
  SAS: ["1610612759", "San Antonio Spurs"],
  OKC: ["1610612760", "Oklahoma City Thunder"],
  TOR: ["1610612761", "Toronto Raptors"],
  UTA: ["1610612762", "Utah Jazz"],
  MEM: ["1610612763", "Memphis Grizzlies"],
  WAS: ["1610612764", "Washington Wizards"],
  DET: ["1610612765", "Detroit Pistons"],
  CHA: ["1610612766", "Charlotte Hornets"],
};

const positionMap = {
  "PG": "Point Guard",
  "SG": "Shooting Guard",
  "SF": "Small Forward",
  "PF": "Power Forward",
  "C": "Center"
};

const formatHeight = (height) => {
  height = height.split("-");
  return `${height[0]} ft ${height[1]} in`;
};

const formatPosition = (position) => {
  position = position.split("/");
  if (position.length === 1) {
    return `${positionMap[position[0]]}`;
  }
  else {
    return `${positionMap[position[0]]} / ${positionMap[position[1]]}`;
  }
}

const formatDraft = (draft) => {
  draft = draft.split(" ");
  if (draft.length === 3) {
    return `${draft[0]} / Round: ${draft[1][1]} / Pick: ${draft[2]}`;
  }
  else {
    return `${draft[0]} / ${draft[1]}`;
  }
}

const MoreInfo = (props) => {
  return (
    <React.Fragment>
      <div className="player-more-info">
        <img
          className="player-team-img-info"
          src={`https://cdn.nba.com/logos/nba/${teamMap[props.player.team][0]}/primary/D/logo.svg`}
          alt={props.player.team}
        />
        <div>
          <h1 className="player-name-info">{props.player.name}</h1>
          <h2>#{props.player.number} | {teamMap[props.player.team][1]}</h2>
          <h2>{formatPosition(props.player.position)}</h2>
        </div>
        <img
          className="player-img-info"
          src={props.player.img}
          alt={props.player.name}
        />
        <div className="player-details-info">
          <div>
            <b>Height</b>
            <p>{formatHeight(props.player.height)}</p>
          </div>
          <div>
            <b>Weight</b>
            <p>{props.player.weight} lb</p>
          </div>
          <div>
            <b>Draft</b>
            <p>{formatDraft(props.player.draft)}</p>
          </div>
          <div>
            <b>Birthday</b>
            <p>{props.player.birthday}</p>
          </div>
          <div>
            <b>Last Attended</b>
            <p>{props.player.from}</p>
          </div>
          <div>
            <b>Country</b>
            <p>{props.player.country}</p>
          </div>
        </div>
      </div>
      <button className="button" onClick={()=>props.addPlayer(props.player)}>Add to Team</button>
    </React.Fragment>
  );
};

export default MoreInfo;
