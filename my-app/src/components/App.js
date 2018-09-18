import React, { Component } from 'react';
import Tracker from './tracker';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/site.min.css';
import Body1 from '../mock/body1';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Tracker/>
          <p className="App-intro">
            
          </p>
        </div>
        <Body1/>

      </div>
    );
  }
}

export default App;
