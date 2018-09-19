import React, { Component } from 'react';
import Tracker from './tracker';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/site.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">          
        <div> <img src="logo.jpg"></img> <h2><b>Trackr</b></h2><h5><b>Transfer ID:123456</b></h5></div>
          <Tracker/>
          <p className="App-intro">
            
          </p>
        </div>

      </div>
    );
  }
}

export default App;
