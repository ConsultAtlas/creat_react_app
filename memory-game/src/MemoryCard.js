import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isFlipped: false};
  }

  clickHandler( ) {
    this.setState({
      // setting isFlipped property to the opposite of whatever it is current. this.state is what pulls
      //in whatever the current state is.
      isFlipped: !this.state.isFlipped
    });
  }
  
  render() {
    
    var memoryCardInnerClass = "MemoryCardInner"

    if (this.props.isFlipped) {
      memoryCardInnerClass += " flipped";
    }

    return (
          <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
            <div className={memoryCardInnerClass}>  
              <div className="MemoryCardBack">
                <img className="DGCraft" alt="placeholder" src='https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png'/>
              </div>
              <div className="MemoryCardFront">
                {this.props.symbol}
              </div>
            </div>  
          </div>
    );
  }


}

export default MemoryCard;