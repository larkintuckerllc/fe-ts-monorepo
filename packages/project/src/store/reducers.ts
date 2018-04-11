import adder from 'DUCKS/adder';
import counter from 'DUCKS/counter';
import todos from 'DUCKS/todos';
import { combineReducers } from 'redux-immutable';

const reducers = {
  adder,
  counter,
  todos,
};

export default combineReducers(reducers);
