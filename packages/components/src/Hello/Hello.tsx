import { Button } from 'antd';
import React from 'react';
import catHungryIconPng from './cat-hungry-icon.png';
import stylesLess from './styles.less';

declare global {
  interface Function {
    displayName?: string;
  }
}
const Hello = () => (
  <div id={stylesLess.root}>
    <h2>Hello World</h2>
    <Button type="primary">Hello Button</Button>
    <img src={catHungryIconPng} />
  </div>
);
Hello.displayName = 'Hello';
export default Hello;
