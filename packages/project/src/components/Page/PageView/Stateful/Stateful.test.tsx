import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Stateful from './Stateful';
import StatefulView from './StatefulView';

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
    const testStatefulView = wrapper.find(StatefulView);
    expect(testStatefulView.props().counter).toEqual(result);
  });

  it('with StateView increments counter when increment called', () => {
    const {} = getDefaultProps();
    const wrapper = shallow(<Stateful />);
    const result = 1;
    let testStatefulView = wrapper.find(StatefulView);
    testStatefulView.props().increment();
    wrapper.update();
    testStatefulView = wrapper.find(StatefulView);
    expect(testStatefulView.props().counter).toEqual(result);
  });

  it('with StateView increments counter when decrement called', () => {
    const {} = getDefaultProps();
    const wrapper = shallow(<Stateful />);
    const result = -1;
    let testStatefulView = wrapper.find(StatefulView);
    testStatefulView.props().decrement();
    wrapper.update();
    testStatefulView = wrapper.find(StatefulView);
    expect(testStatefulView.props().counter).toEqual(result);
  });
});
