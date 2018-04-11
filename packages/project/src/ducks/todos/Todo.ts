import { Record } from 'immutable';

const todoDefault = {
  completed: false,
  id: 0,
  title: 'title',
  userID: 0,
};

export interface TodoJS {
  completed: boolean;
  id: number;
  title: string;
  userID: number;
}

export default class Todo extends Record(todoDefault) {
  constructor(params: TodoJS) {
    super(params);
  }
  public get<T extends keyof TodoJS>(value: T): TodoJS[T] {
    return super.get(value);
  }
}
