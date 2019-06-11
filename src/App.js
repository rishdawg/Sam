import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getBalletStyles } from './ballet';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { isLoading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    getBalletStyles().then((data) => alert(JSON.stringify(data)))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>
          things
        </button>
      </div>
    );
  }
}

export default App;
