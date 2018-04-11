import Todo from 'DUCKS/todos/Todo';
import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import { List } from 'immutable';
import React from 'react';
import AsyncView from './AsyncView';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const todoDefault = {
  completed: false,
  id: 0,
  title: 'title',
  userID: 0,
};
const sampleTodo = new Todo(todoDefault);
const sampleTodos = List([sampleTodo]);
const getDefaultProps = () => ({
  error: false,
  fetchTodos: jest.fn(),
  requested: false,
  todos: sampleTodos,
});

describe('Async component', () => {
  it('shallow renders without crashing', () => {
    const { error, fetchTodos, requested, todos } = getDefaultProps();
    shallow(
      <AsyncView error={error} fetchTodos={fetchTodos} requested={requested} todos={todos} />
    );
  });
  it('renders differently with requested', () => {
    const { error, fetchTodos, todos } = getDefaultProps();
    const wrapper = shallow(
      <AsyncView error={error} fetchTodos={fetchTodos} requested={true} todos={todos} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders differently with not requested and error', () => {
    const { fetchTodos, requested, todos } = getDefaultProps();
    const wrapper = shallow(
      <AsyncView error={true} fetchTodos={fetchTodos} requested={requested} todos={todos} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders differently with not requested not error and 0 todos', () => {
    const { error, fetchTodos, requested } = getDefaultProps();
    const todos = List<Todo>([]);
    const wrapper = shallow(
      <AsyncView error={error} fetchTodos={fetchTodos} requested={requested} todos={todos} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls fetchTodos on mount', () => {
    const { error, fetchTodos, requested, todos } = getDefaultProps();
    shallow(
      <AsyncView error={error} fetchTodos={fetchTodos} requested={requested} todos={todos} />
    );
    expect(fetchTodos.mock.calls.length).toBe(1);
  });
});
