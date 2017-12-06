import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

generateDeck() {
  var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  var deck = [];

  for (var i=0; i<16; i++) {
    allCards.push({
        isFlipped: false,
        symbol: symbols[i%8]
    });
  }
    shuffle(deck);

    return deck;
  
}

/**
 * pulled from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      deck: [],
      pickedCards: []
    };
  }
  
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Memory Game</h1>
            <h2 className="App-subtitle">Match Cards to Win</h2>
          </header>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
        </div>
    );
  }
}

export default App;
