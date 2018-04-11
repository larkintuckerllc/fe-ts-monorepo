import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import { List } from 'immutable';
import React from 'react';
import PageView from './PageView';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({
  add: jest.fn(),
  adder: List<string>([]),
  counter: 0,
  decrement: jest.fn(),
  increment: jest.fn(),
});

describe('PageView component', () => {
  it('shallow renders without crashing', () => {
    const { add, adder, counter, decrement, increment } = getDefaultProps();
    shallow(
      <PageView
        add={add}
        adder={adder}
        counter={counter}
        decrement={decrement}
        increment={increment}
      />
    );
  });
});
