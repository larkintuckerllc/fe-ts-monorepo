import * as fromTodos from 'DUCKS/todos';
import Todo from 'DUCKS/todos/Todo';
import { List } from 'immutable';
import { connect } from 'react-redux';
import AppState from 'STORE/AppState';
import AsyncView from './AsyncView';

interface StateProps {
  error: boolean;
  requested: boolean;
  todos: List<Todo>;
}

interface DispatchProps {
  fetchTodos(): void;
}

const mapStateToProps = (state: AppState) => ({
  error: fromTodos.getTodosError(state),
  requested: fromTodos.getTodosRequested(state),
  todos: fromTodos.getTodos(state),
});

const mapDispatchToProps = {
  fetchTodos: fromTodos.fetchTodos,
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(AsyncView);
