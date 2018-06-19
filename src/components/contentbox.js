import React from "react";
import "./contentbox.css"

const Contentbox = props => (
<div className="card container box">
  <div className="card-body">
    {/* <h1 className="card-title">Card title</h1> */}
    {/* <h6 classNcame="card-subtitle">Card subtitle</h6> */}
    <div className="card-text">
          There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your total score.
          
          You will be given a random number at the start of the game.
          You win the game by matching your total score to the random number. You lose the game if your total score goes above the random number.

          The value of each crystal is hidden from you until you click on it.

          Each time the game starts, the game will change the values of each crystal.
          </div>
    {/* <a href="#" className="card-link">Another link</a> */}
  </div>
</div>
  );
  
export default Contentbox;