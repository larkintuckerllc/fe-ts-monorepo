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
    <div>test</div>
    <img src={catHungryIconPng} />
  </div>
);
Hello.displayName = 'Hello';
export default Hello;
