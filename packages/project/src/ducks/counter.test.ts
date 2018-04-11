// import { init, initialState } from 'STORE/reducers';
import { unknown } from 'STORE/AppAction';
import { appStateInitial } from 'STORE/AppState';
import counter, { decrement, getCounter, increment } from './counter';

describe('counter duck', () => {
  it('reducer should ignore unknown actions', () => {
    const initialState = 0;
    const action = unknown();
    expect(counter(initialState, action)).toBe(initialState);
  });

  it('reducer should handle INCREMENT', () => {
    const initialState = 0;
    const nextState = 1;
    const action = increment();
    expect(counter(initialState, action)).toBe(nextState);
  });

  it('reducer should handle DECREMENT', () => {
    const initialState = 0;
    const nextState = -1;
    const action = decrement();
    expect(counter(initialState, action)).toBe(nextState);
  });

  it('add should create INCREMENT action', () => {
    const result = {
      type: 'INCREMENT',
    };
    expect(increment()).toEqual(result);
  });

  it('add should create DECREMENT action', () => {
    const result = {
      type: 'DECREMENT',
    };
    expect(decrement()).toEqual(result);
  });

  it('getCounter should return', () => {
    const result = 0;
    expect(getCounter(appStateInitial)).toEqual(result);
  });
});
