import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Counter from './Counter';
import styles from './styles.less';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({
  counter: 0,
  decrement: jest.fn(),
  increment: jest.fn(),
});

describe('Counter component', () => {
  it('shallow renders without crashing', () => {
    const { counter, decrement, increment } = getDefaultProps();
    shallow(<Counter counter={counter} decrement={decrement} increment={increment} />);
  });

  it('calls decrement on test_decrement click', () => {
    const { counter, decrement, increment } = getDefaultProps();
    const wrapper = shallow(
      <Counter counter={counter} decrement={decrement} increment={increment} />
    );
    const testDecrement = wrapper.find(`#${styles.decrement}`);
    testDecrement.simulate('click');
    const callsLength = 1;
    expect(decrement.mock.calls).toHaveLength(callsLength);
  });

  it('calls increment on test_increment click', () => {
    const { counter, decrement, increment } = getDefaultProps();
    const wrapper = shallow(
      <Counter counter={counter} decrement={decrement} increment={increment} />
    );
    const testIncrement = wrapper.find(`#${styles.increment}`);
    testIncrement.simulate('click');
    const callsLength = 1;
    expect(increment.mock.calls).toHaveLength(callsLength);
  });
});
