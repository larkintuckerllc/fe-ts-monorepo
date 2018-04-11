import React, { Component } from 'react';

interface AnotherCounterProps {
  counter: number;
  decrement(): void;
  increment(): void;
}

export default class AnotherCounter extends Component<AnotherCounterProps> {
  public render() {
    const { counter, decrement, increment } = this.props;
    return (
      <div>
        <h2>Connected</h2>
        <div>{counter.toString()}</div>
        <button key="test_increment" onClick={increment}>
          +
        </button>
        <button key="test_decrement" onClick={decrement}>
          -
        </button>
      </div>
    );
  }
}
