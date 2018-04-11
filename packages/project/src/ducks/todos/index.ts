import todos, {
  fetchTodos as iFetchTodos,
  FetchTodosRequestAction as iFetchTodosRequestAction,
  FetchTodosResponseAction as iFetchTodosResponseAction,
  getTodo as iGetTodo,
  getTodos as iGetTodos,
  getTodosError as iGetTodosError,
  getTodosRequested as iGetTodosRequested,
} from './todos';

export default todos;

export const fetchTodos = iFetchTodos;

/* tslint:disable-next-line */
export interface FetchTodosRequestAction extends iFetchTodosRequestAction {}

/* tslint:disable-next-line */
export interface FetchTodosResponseAction extends iFetchTodosResponseAction {}

export const getTodo = iGetTodo;

export const getTodos = iGetTodos;

export const getTodosError = iGetTodosError;

export const getTodosRequested = iGetTodosRequested;
