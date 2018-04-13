import * as fromTodos from 'APIS/todos';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';
import AppAction from 'STORE/AppAction';
import AppState from 'STORE/AppState';
import Todo, { TodoJS } from './Todo';

// ACTIONS
const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';

const FETCH_TODOS_RESPONSE = 'FETCH_TODOS_RESPONSE';

export interface FetchTodosRequestAction {
  type: typeof FETCH_TODOS_REQUEST;
}

export interface FetchTodosResponseAction {
  type: typeof FETCH_TODOS_RESPONSE;
  payload: List<Todo> | string;
  error?: boolean;
}

const fetchTodosRequest = (): FetchTodosRequestAction => ({
  type: FETCH_TODOS_REQUEST,
});

const fetchTodosResponse = (
  payload: List<Todo> | string,
  error?: boolean
): FetchTodosResponseAction =>
  error
    ? {
        error: true,
        payload,
        type: FETCH_TODOS_RESPONSE,
      }
    : {
        payload,
        type: FETCH_TODOS_RESPONSE,
      };

export const fetchTodos = () => async (dispatch: (action: AppAction) => void) => {
  dispatch(fetchTodosRequest());
  try {
    const json = await fromTodos.fetchTodos();
    const reducer = (accumulator: List<Todo>, jsonTodo: TodoJS) =>
      accumulator.push(new Todo(jsonTodo));
    const todos = json.reduce(reducer, List<Todo>([])) as List<Todo>;
    dispatch(fetchTodosResponse(todos));
  } catch {
    dispatch(fetchTodosResponse('500', true));
  }
};

// REDUCER
const requested = (state: boolean, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return true;
    case FETCH_TODOS_RESPONSE:
      return false;
    default:
      return state;
  }
};

const byId = (state: Map<number, Todo>, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_RESPONSE:
      if (action.error) {
        return state;
      }
      const reducer = (accumulator: Map<number, Todo>, todo: Todo) =>
        accumulator.set(todo.get('id'), todo);
      const payload = action.payload as List<Todo>;
      return payload.reduce(reducer, state);
    default:
      return state;
  }
};

const ids = (state: List<number>, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_RESPONSE:
      if (action.error) {
        return state;
      }
      const payload = action.payload as List<Todo>;
      return List(payload.map((o: Todo) => o.get('id')));
    default:
      return state;
  }
};

const errored = (state: boolean, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return false;
    case FETCH_TODOS_RESPONSE:
      return action.error ? true : false;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  errored,
  ids,
  requested,
});

// SELECTORS
export const getTodosRequested = (state: AppState) => state.get('todos').get('requested');

export const getTodosError = (state: AppState) => state.get('todos').get('errored');

export const getTodo = (state: AppState, id: number) => {
  return state
    .get('todos')
    .get('byId')
    .get(id);
};

const getTodosById = (state: AppState) => state.get('todos').get('byId');

const getTodosIds = (state: AppState) => state.get('todos').get('ids');

export const getTodos = createSelector(
  [getTodosById, getTodosIds],
  (pById, pIds) => pIds.map(o => pById.get(o)) as List<Todo>
);
