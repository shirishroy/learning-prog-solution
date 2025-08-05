import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  sayHello = () => {
    alert("Hello! Welcome to the Event Handler Demo.");
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert("Message: " + message);
  };

  handleClick = (e) => {
    alert("I was clicked!");
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>Synthetic Click</button>
      </div>
    );
  }
}

export default Counter;
