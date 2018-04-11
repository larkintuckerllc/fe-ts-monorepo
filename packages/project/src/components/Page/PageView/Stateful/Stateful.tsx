import React, { Component } from 'react';
import StatefulView from './StatefulView';

interface StatefulState {
  counter: number;
}

export default class Stateful extends Component<{}, StatefulState> {
  public state: StatefulState = {
    counter: 0,
  };

  public render() {
    const { counter } = this.state;
    return (
      <StatefulView
        key="test_stateful_view"
        counter={counter}
        decrement={this.handleDecrementClick}
        increment={this.handleIncrementClick}
      />
    );
  }

  private handleIncrementClick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  private handleDecrementClick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  };
}
