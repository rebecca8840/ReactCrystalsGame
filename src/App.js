import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/jumbotron.js";
import Contentbox from './components/contentbox';
import Scorebox from "./components/scorebox";
import Wins from "./components/wins";
import Losses from "./components/losses";
import Game from "./components/game";
import Randomnum from "./components/randomnum";
import Crystal from "./Crystal.json";

class App extends Component {
  const Random = Math.floor(Math.random() * 101+19);

  const ResetNum = Math.floor(Math.random() * 11+1);
  
  let userTotal = 0;
  
  let wins = 0;
  
  let losses = 0;
  
  
  // setClick = id => {
  //     let currentIndex = this.state.Crystal.findIndex(function(Crystal){
  //         return (id === Crystal.id)
  //     });
  
  //     if (this.state.score > this.state.Random) {
  //         this.setState ({
  //             this.state.losses ++;
  //         })
  //     }
  //         else {
  //             this.state.wins ++;
  //         }
  //     }   
  
  //         reset () {
  //             Random.ResetNum();
  //         }
      // The code above is supposed to be the wins/losses going up or down and when the number resets after said win or loss.
      // if the user score goes above the posted random number then the number of losses increases
  
      
  
      // Code above is supppooosed to be the onclick eveeennttss
  

  render() {
    return (
      <div>
      <Header />
      <Contentbox />
      <Randomnum />
      <Wins />
      <Losses />
      <Game />
      <Scorebox /> 
      {/* scorebox = user score */}
      </div>
    )
  }
}

export default App;

// The objective of the game is to try to match the score to the random number given to the player. The player wins if their number matches the number, and the player loses if their score goes above it. The game restarts whenever a player wins or loses. When the game restarts there will be a new number and the crystals will have new values. The player's score and the score container will also reset to zero. Wins and losses are displayed on the page as long as the session lasts.
// The player will be shown a random number between 19 and 120. At the bottom of the page, there will be four crystal buttons displayed, each containing a random hidden value between 1 and 12. Clicking on the crystals will update the player's score. The player will not be able to figure out what number the crystals contain until they are clicked.