import React, { Component } from 'react';
import './app.css';
import Clock from './Clock';

class App extends Component {
  // Creating state for the application
  constructor(props) {
    super(props);

    // State is always a object
    this.state = {
      deadline: 'December 25, 2019',
      newDeadLine: ''
    }
  }

  changeDeadline() {
    // You must never mutate or or change state directly.
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
          <Clock />
        <div>
          <input 
            placeholder="new date"
            onChange={event => console.log('event', event.target.value)}
          />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default App;