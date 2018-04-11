import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Stateful from './Stateful';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe('Stateful component', () => {
  it('shallow renders without crashing', () => {
    const {} = getDefaultProps();
    shallow(<Stateful />);
  });

  it('with StateView initalized counter to 0', () => {
    const {} = getDefaultProps();
    const wrapper = shallow(<Stateful />);
    const result = 0;
    const testStatefulView = wrapper.findWhere(node => node.key() === 'test_stateful_view');
    expect(testStatefulView.props().counter).toEqual(result);
  });

  it('with StateView increments counter when increment called', () => {
    const {} = getDefaultProps();
    const wrapper = shallow(<Stateful />);
    const result = 1;
    let testStatefulView = wrapper.findWhere(node => node.key() === 'test_stateful_view');
    testStatefulView.props().increment();
    wrapper.update();
    testStatefulView = wrapper.findWhere(node => node.key() === 'test_stateful_view');
    expect(testStatefulView.props().counter).toEqual(result);
  });

  it('with StateView increments counter when decrement called', () => {
    const {} = getDefaultProps();
    const wrapper = shallow(<Stateful />);
    const result = -1;
    let testStatefulView = wrapper.findWhere(node => node.key() === 'test_stateful_view');
    testStatefulView.props().decrement();
    wrapper.update();
    testStatefulView = wrapper.findWhere(node => node.key() === 'test_stateful_view');
    expect(testStatefulView.props().counter).toEqual(result);
  });
});
