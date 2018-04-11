import { AddAction } from 'DUCKS/adder';
import { DecrementAction, IncrementAction } from 'DUCKS/counter';
import { FetchTodosRequestAction, FetchTodosResponseAction } from 'DUCKS/todos';

const UNKNOWN = 'UNKNOWN';

export interface UnknownAction {
  type: typeof UNKNOWN;
}

export const unknown = (): UnknownAction => ({
  type: UNKNOWN,
});

type AppAction =
  | AddAction
  | DecrementAction
  | FetchTodosRequestAction
  | FetchTodosResponseAction
  | IncrementAction
  | UnknownAction;

export default AppAction;
