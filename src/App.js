import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getBalletStyles } from './ballet';
import {Container} from './Container';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { isLoading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({isLoading:true});
    getBalletStyles().then((data) => {
      this.setState({isLoading : false});
      alert(JSON.stringify(data));
    })
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
        </div>
      )
    }
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          Classical Ballet
        </button>
        <Container dancing={[
          {
            style: 'Classical',
            funfact: 'Classical ballet has training methods which often get their names by their creators'
          },
          {
            style: 'Neoclassical',
            funfact: 'it has no strict scenery, plot and costumes and minimal set design'
          },
          {
            style: 'Contemporary',
            funfact: 'Dance moves are bigger, fast, and so it is characterized by robust athleticism, floor work, turn-in of the legs, dancing barefoot, acting and mime.'
          }
        ]}/>
      </div>
    );
  }
}

export default App;
