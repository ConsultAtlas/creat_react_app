import React, { Component } from 'react';
import './MemoryGame.css';
import './JobsListItem.css';


class JobsListItem extends Component {
    
      constructor() {
        super();
      }
    
      render() {
        return (
          <div className="JobsListItem">
            <div className="left">
                <b>{this.props.title}</b>
                <div>{this.props.company}</div>
            </div>
            <div className="right">
                <b>{this.props.type}</b>
                <div>{this.props.created_at}</div>
            </div>
          </div>
        );
      }
    }
    
    export default JobsListItem;