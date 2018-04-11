import React from 'react';

interface StatefulViewProps {
  counter: number;
  decrement(): void;
  increment(): void;
}

const StatefulView = ({ counter, decrement, increment }: StatefulViewProps) => (
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
export default StatefulView;
