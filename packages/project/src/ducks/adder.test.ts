import { List } from 'immutable';
import * as matchers from 'jest-immutable-matchers';
import { unknown } from 'STORE/AppAction';
import { appStateInitial } from 'STORE/AppState';
import adder, { add, getAdder } from './adder';

describe('adder duck', () => {
  beforeEach(() => {
    jest.addMatchers(matchers);
  });

  it('reducer should ignore unknown actions', () => {
    const initialState = List<string>([]);
    const action = unknown();
    expect(adder(initialState, action)).toEqualImmutable(initialState);
  });

  it('reducer should handle ADD', () => {
    const initialState = List<string>([]);
    const nextState = List<string>(['Test']);
    const action = add('Test');
    expect(adder(initialState, action)).toEqualImmutable(nextState);
  });

  it('add should create ADD action', () => {
    const result = {
      payload: 'Test',
      type: 'ADD',
    };
    expect(add('Test')).toEqual(result);
  });

  it('getAdder should return', () => {
    const result = List<string>([]);
    expect(getAdder(appStateInitial)).toEqualImmutable(result);
  });
});
