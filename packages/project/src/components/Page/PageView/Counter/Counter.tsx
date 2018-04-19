import React from 'react';
import styles from './styles.less';

interface CounterProps {
  counter: number;
  decrement(): void;
  increment(): void;
}

const Counter = ({ counter, decrement, increment }: CounterProps) => (
  <div>
    <h2>Counter</h2>
    <div>{counter.toString()}</div>
    <button id={styles.increment} onClick={increment}>
      +
    </button>
    <button id={styles.decrement} onClick={decrement}>
      -
    </button>
  </div>
);
export default Counter;
