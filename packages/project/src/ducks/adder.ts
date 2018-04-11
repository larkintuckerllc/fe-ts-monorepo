import { List } from 'immutable';
import AppAction from 'STORE/AppAction';
import AppState from 'STORE/AppState';

// ACTIONS
const ADD = 'ADD';

export interface AddAction {
  type: typeof ADD;
  payload: string;
}

export const add = (value: string): AddAction => ({
  payload: value,
  type: ADD,
});

// STATE
export type AdderState = List<string>;

export const adderInitialState = List<string>([]);

// REDUCER
export default (state: List<string>, action: AppAction) => {
  switch (action.type) {
    case ADD:
      return state.push(action.payload);
    default:
      return state;
  }
};

// SELECTORS
export const getAdder = (state: AppState) => {
  return state.get('adder');
};
