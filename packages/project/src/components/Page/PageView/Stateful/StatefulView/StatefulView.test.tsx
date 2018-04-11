import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import StatefulView from './StatefulView';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({
  counter: 0,
  decrement: jest.fn(),
  increment: jest.fn(),
});

describe('Counter component', () => {
  it('shallow renders without crashing', () => {
    const { counter, decrement, increment } = getDefaultProps();
    shallow(<StatefulView counter={counter} decrement={decrement} increment={increment} />);
  });

  it('calls decrement on test_decrement click', () => {
    const { counter, decrement, increment } = getDefaultProps();
    const wrapper = shallow(
      <StatefulView counter={counter} decrement={decrement} increment={increment} />
    );
    const testDecrement = wrapper.findWhere(node => node.key() === 'test_decrement');
    testDecrement.simulate('click');
    expect(decrement.mock.calls).toHaveLength(1);
  });

  it('calls increment on test_increment click', () => {
    const { counter, decrement, increment } = getDefaultProps();
    const wrapper = shallow(
      <StatefulView counter={counter} decrement={decrement} increment={increment} />
    );
    const testIncrement = wrapper.findWhere(node => node.key() === 'test_increment');
    testIncrement.simulate('click');
    expect(increment.mock.calls).toHaveLength(1);
  });
});
