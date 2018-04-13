import React from 'react';
import catHungryIconPng from './cat-hungry-icon.png';
import stylesLess from './styles.less';

const Hello = () => (
  <div id={stylesLess.root}>
    <h2>Hello World</h2>
    <div>test</div>
    <img src={catHungryIconPng} />
  </div>
);
export default Hello;
