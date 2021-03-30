import React from 'react';

const Player = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Name: {props.player.name}</h1>
      <img className='card-image' src={props.player.img} alt='player' />
      <h4>Height: {props.player.height}</h4>
      <h4>Position: {props.player.position}</h4>
    </div>
  );
}

export default Player;