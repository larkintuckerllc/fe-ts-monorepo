import { List } from 'immutable';
import React from 'react';
import AnotherCounter from './AnotherCounter';
import Ant from './Ant';
import Async from './Async';
import Counter from './Counter';
import Frame from './Frame';
import Listing from './Listing';
import Media from './Media';
import Risky from './Risky';
import Stateful from './Stateful';
import Styling from './Styling';
import Wrapped from './Wrapped';

interface PageViewProps {
  adder: List<string>;
  counter: number;
  add(value: string): void;
  decrement(): void;
  increment(): void;
}

const PageView = ({ add, adder, counter, decrement, increment }: PageViewProps) => (
  <Frame>
    <Ant />
    <AnotherCounter />
    <Async />
    <Counter counter={counter} decrement={decrement} increment={increment} />
    <Listing add={add} items={adder.toJS()} />
    <Media />
    <Risky />
    <Stateful />
    <Styling />
    <Wrapped text="test" />
  </Frame>
);
export default PageView;
