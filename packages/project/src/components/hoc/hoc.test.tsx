import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import { hoc, InjectedProps } from './hoc';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

interface WrappedProps {
  text: string;
}

const Wrapped = (props: WrappedProps & InjectedProps) => {
  const { clickCount, text } = props;
  return (
    <div>
      <div>{text}</div>
      <div>{clickCount.toString()}</div>
    </div>
  );
};

const WrappedWithHoc = hoc()(Wrapped);

const WrappedWithHocDebug = hoc({ debug: true })(Wrapped);

const getDefaultProps = () => ({
  text: 'hello world',
});

describe('hoc HOC component', () => {
  it('shallow renders without crashing', () => {
    const { text } = getDefaultProps();
    shallow(<WrappedWithHoc text={text} />);
  });

  it('handles click', () => {
    const { text } = getDefaultProps();
    const wrapper = shallow(<WrappedWithHoc text={text} />);
    wrapper.find('#test_root').simulate('click');
  });

  it('handles click with debug', () => {
    const { text } = getDefaultProps();
    const wrapper = shallow(<WrappedWithHocDebug text={text} />);
    wrapper.find('#test_root').simulate('click');
  });
});
