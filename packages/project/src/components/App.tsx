import React from 'react';
import { Provider } from 'react-redux';
import store from 'STORE/store';
import Page from './Page';

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);
export default App;
