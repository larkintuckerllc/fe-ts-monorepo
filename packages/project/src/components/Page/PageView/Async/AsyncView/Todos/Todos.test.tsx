import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Todos from './Todos';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('Todos component', () => {
  it('shallow renders without crashing', () => {
    const todoDefault = {
      completed: false,
      id: 0,
      title: 'title',
      userID: 0,
    };
    const getDefaultProps = () => ({
      todos: [todoDefault],
    });
    const { todos } = getDefaultProps();
    shallow(<Todos todos={todos} />);
  });
});
