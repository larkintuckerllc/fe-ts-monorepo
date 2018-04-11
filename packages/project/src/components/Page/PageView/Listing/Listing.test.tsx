import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Listing from './Listing';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({
  add: jest.fn(),
  items: ['Hello World'],
});

describe('Listing component', () => {
  it('shallow renders without crashing', () => {
    const { add, items } = getDefaultProps();
    shallow(<Listing add={add} items={items} />);
  });

  it('shallow renders without crashing', () => {
    const { add, items } = getDefaultProps();
    const wrapper = shallow(<Listing add={add} items={items} />);
    const callsLength = 1;
    const call0Result = 'Hello World';
    wrapper.find('#test_add').simulate('click');
    expect(add.mock.calls).toHaveLength(callsLength);
    expect(add.mock.calls[0][0]).toBe(call0Result);
  });
});
