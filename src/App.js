import React, { Component } from 'react';
import './style.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 42,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetCount = () => {
    this.setState({
      count: (this.state.count = 42),
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <h2>{count}</h2> <br></br>
        <button className="counter-button" onClick={this.incrementCount}>
          Click +
        </button>
        <button className="counter-button" onClick={this.decrementCount}>
          Click -
        </button>
        <button className="counter-button" onClick={this.resetCount}>
          Resetear a 42
        </button>
      </div>
    );
  }
}
