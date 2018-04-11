import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';
import './styles.less';

render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production') {
  window.console.log('not in production');
}
