import { Button } from 'antd';
import React from 'react';
import catHungryIconPng from './cat-hungry-icon.png';
import styles from './styles.less';

declare global {
  interface Function {
    displayName?: string;
  }
}
const Hello = () => (
  <div id={styles.root}>
    <h2>Hello World</h2>
    <Button type="primary">Hello Button</Button>
    <img src={catHungryIconPng} />
    <div id={styles.rootHello}>Hello</div>
  </div>
);
Hello.displayName = 'Hello';
export default Hello;
