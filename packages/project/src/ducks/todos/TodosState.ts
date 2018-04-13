import { List, Map, Record } from 'immutable';
import Todo from './Todo';

const todosStateDefault = {
  byId: Map<number, Todo>(),
  errored: false,
  ids: List<number>([]),
  requested: false,
};

interface TodosStateJS {
  byId: Map<number, Todo>;
  errored: boolean;
  ids: List<number>;
  requested: boolean;
}

export default class TodosState extends Record(todosStateDefault) {
  constructor(params: TodosStateJS) {
    super(params);
  }
  public get<T extends keyof TodosStateJS>(value: T): TodosStateJS[T] {
    return super.get(value, null);
  }
}

export const todosInitialState = new TodosState(todosStateDefault);
