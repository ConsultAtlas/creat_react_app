import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

function generateDeck() {
  var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  var deck = [];

  for (var i=0; i<16; i++) {
    deck.push({
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
}


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }
  
  pickCard(cardIndex) {
    // Needs to check if you're allowed to pick this card in the first place
    if (this.state.deck[cardIndex].isFlipped === true) {
        return;
    }
    var cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;
    var newPickedCards = this.state.pickedCards.concat(cardIndex);
    var newDeck = this.state.deck.map((card, index) => {
      if (cardIndex == index) {
        return cardToFlip;
      }
      return card;
    });

    if (newPickedCards.length == 2) {
      var cardIndex1 = newPickedCards[0];
      var cardIndex2 = newPickedCards[1];
    }

    this.setState({deck: newDeck, pickedCards: newPickedCards});
  }
  

  render() {
    var cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>;
    });
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Memory Game</h1>
            <h2 className="App-subtitle">Match Cards to Win</h2>
          </header>
          <div>
            {cardsJSX.slice(0,4)}
          </div>
          <div>
            {cardsJSX.slice(4,8)}
          </div>
          <div>
            {cardsJSX.slice(8,12)}
          </div>
          <div>
            {cardsJSX.slice(12,16)}
          </div>
        </div>
    );
  }
}

export default App;
