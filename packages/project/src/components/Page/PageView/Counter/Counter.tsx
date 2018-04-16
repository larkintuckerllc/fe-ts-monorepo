import React from 'react';

interface CounterProps {
  counter: number;
  decrement(): void;
  increment(): void;
}

const Counter = ({ counter, decrement, increment }: CounterProps) => (
  <div>
    <h2>Counter</h2>
    <div>{counter.toString()}</div>
    <button key="test_increment" onClick={increment}>
      +
    </button>
    <button key="test_decrement" onClick={decrement}>
      -
    </button>
  </div>
);
export default Counter;
