import React, { Component } from 'react';

interface ListingProps {
  items: string[];
  add(value: string): void;
}

export default class Listing extends Component<ListingProps> {
  public render() {
    const { items } = this.props;
    return (
      <div>
        <h2>Listing</h2>
        <button id="test_add" onClick={this.addItem}>
          Add
        </button>
        <ul>{items.map((o, i) => <li key={i}>{o}</li>)}</ul>
      </div>
    );
  }

  private addItem = () => {
    const { add } = this.props;
    add('Hello World');
  };
}
