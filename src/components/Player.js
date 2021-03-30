import React from 'react'
import { Link } from 'react-router-dom'

const Player = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Name: {props.player.name}</h1>
      <img className='card-image' src={props.player.img} alt='player' />
      <h4>Height: {props.player.height}</h4>
      <h4>Position: {props.player.position}</h4>
      <div>
        <Link to={`/players/${props.player.id}`} >More Info</Link>
      </div>
    </div>
  );
}

export default Player;