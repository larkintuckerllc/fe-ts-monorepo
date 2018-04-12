import { Button } from 'antd';
import React from 'react';
import stylesLess from './styles.less';

const Hello = () => (
  <div id={stylesLess.root}>
    Hello World
    <Button type="primary">Test</Button>
  </div>
);
export default Hello;
