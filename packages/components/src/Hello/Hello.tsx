import { Button } from 'antd';
import React from 'react';
import catHungryIconPng from './cat-hungry-icon.png';
import stylesLess from './styles.less';

const Hello = () => (
  <div id={stylesLess.root}>
    <h2>Hello</h2>
    <div>
      <Button type="primary">Test</Button>
    </div>
    <img src={catHungryIconPng} />
  </div>
);
export default Hello;
