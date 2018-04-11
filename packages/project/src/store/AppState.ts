import { adderInitialState, AdderState } from 'DUCKS/adder';
import { counterInitialState, CounterState } from 'DUCKS/counter';
import TodosState, { todosInitialState } from 'DUCKS/todos/TodosState';
import { Record } from 'immutable';

const appStateDefault = {
  adder: adderInitialState,
  counter: counterInitialState,
  todos: todosInitialState,
};

interface AppStateJS {
  adder: AdderState;
  counter: CounterState;
  todos: TodosState;
}

export default class AppState extends Record(appStateDefault) {
  constructor(params: AppStateJS) {
    super(params);
  }
  public get<T extends keyof AppStateJS>(value: T): AppStateJS[T] {
    return super.get(value);
  }
}

export const appStateInitial = new AppState(appStateDefault);
