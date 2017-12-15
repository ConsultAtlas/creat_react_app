import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';



class App extends Component {
    
      constructor() {
        super();
      }
    
      render() {
        return (
            <div className="App">
                <div className="navbar">
                    <Link to="/memory">Memory Game</Link>
                    <Link to="/jobs">Jobs</Link>
                </div>
                <Switch>
                    <Route path="/memory" component={MemoryGame}/>
                    <Route path="/jobs" component={Jobs}/>
                    <Route path="/" component={MemoryGame}/>
                </Switch>
            </div>
        );
      }
    }
    
    export default App;