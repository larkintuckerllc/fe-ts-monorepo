import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { appStateInitial } from './AppState';
import reducers from './reducers';

const middlewares = [reduxThunk];

const enhancer = compose(
  applyMiddleware(...middlewares),
  /* istanbul ignore next */
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
);

export default createStore(reducers, appStateInitial, enhancer);
