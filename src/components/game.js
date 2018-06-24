import React from "react";
import './game.css';


const Game = props => (
  <div className="card">
    <div className="img-container container">
      <img alt={props.name} src={props.image} onClick={() => props.setClick(props.id)}/>
    </div>
  </div>
);

export default Game;