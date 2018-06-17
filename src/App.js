import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/jumbotron.js";
import Contentbox from './components/contentbox';
import Crystal from "./Crystal.json";

class App extends Component {
    state = {
      Crystal: Crystal,


    }
  

  render() {
    return (
      <div>
      <Header />
      <Contentbox />
      </div>
    )
  }
}

export default App;

// The objective of the game is to try to match the score to the random number given to the player. The player wins if their number matches the number, and the player loses if their score goes above it. The game restarts whenever a player wins or loses. When the game restarts there will be a new number and the crystals will have new values. The player's score and the score container will also reset to zero. Wins and losses are displayed on the page as long as the session lasts.
// The player will be shown a random number between 19 and 120. At the bottom of the page, there will be four crystal buttons displayed, each containing a random hidden value between 1 and 12. Clicking on the crystals will update the player's score. The player will not be able to figure out what number the crystals contain until they are clicked.