import React from "react";


let teamImages = {
  ATL: "1610612737",
  BOS: "1610612738",
  CLE: "1610612739",
  NOP: "1610612740",
  CHI: "1610612741",
  DAL: "1610612742",
  DEN: "1610612743",
  GSW: "1610612744",
  HOU: "1610612745",
  LAC: "1610612746",
  LAL: "1610612747",
  MIA: "1610612748",
  MIL: "1610612749",
  MIN: "1610612750",
  BKN: "1610612751",
  NYK: "1610612752",
  ORL: "1610612753",
  IND: "1610612754",
  PHI: "1610612755",
  PHX: "1610612756",
  POR: "1610612757",
  SAC: "1610612758",
  SAS: "1610612759",
  OKC: "1610612760",
  TOR: "1610612761",
  UTA: "1610612762",
  MEM: "1610612763",
  WAS: "1610612764",
  DET: "1610612765",
  CHA: "1610612766",
};

const formatName = (name) => {
  name = name.split(" ");
  return `${name[0]}  ${name[1].toUpperCase()}`;
};

const formatHeight = (height) => {
  height = height.split("-");
  return `${height[0]} ft ${height[1]} in`;
};

const MoreInfo = (props) => {
  return (
    <div className="player-card">
      <div className="player-info">
        <img
          className="player-team-img-card"
          src={`https://cdn.nba.com/logos/nba/${
            teamImages[props.player.team]
          }/primary/D/logo.svg`}
          alt={props.player.team}
        />
        <h3 className="player-name-card">{formatName(props.player.name)}</h3>
        <img
          className="player-img-card"
          src={props.player.img}
          alt={props.player.name}
        />
        <div className="player-details">
          <h5>Height: {formatHeight(props.player.height)}</h5>
          <h5>Weight: {props.player.weight} lbs</h5>
          <h5>Position: {props.player.position}</h5>
          <h5>Number: {props.player.number}</h5>
          <h5>Birthday: {props.player.birthday}</h5>
          <h5>From: {props.player.from}</h5>
          <h5>Country: {props.player.country}</h5>
        </div>
        <button>Add to Team</button>
      </div>
    </div>
  );
};

export default MoreInfo;