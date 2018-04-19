import React from 'react';
import styles from './styles.less';

interface StatefulViewProps {
  counter: number;
  decrement(): void;
  increment(): void;
}

const StatefulView = ({ counter, decrement, increment }: StatefulViewProps) => (
  <div>
    <h2>Connected</h2>
    <div>{counter.toString()}</div>
    <button id={styles.increment} onClick={increment}>
      +
    </button>
    <button id={styles.decrement} onClick={decrement}>
      -
    </button>
  </div>
);
export default StatefulView;
