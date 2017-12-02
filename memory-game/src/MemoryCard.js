import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  render() {
    return (
          <div className="MemoryCard">
            <div className="MemoryCardInner">  
              <div className="MemoryCardBack">
                <img className="DGCraft" alt="placeholder" src='https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png'/>
              </div>
              <div className="MemoryCardFront">
                ∆
              </div>
            </div>  
          </div>
    );
  }
}

export default MemoryCard;