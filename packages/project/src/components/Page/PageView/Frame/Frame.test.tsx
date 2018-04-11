import Enzyme, { shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Frame from './Frame';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe('Frame component', () => {
  it('shallow renders without crashing', () => {
    const {} = getDefaultProps();
    shallow(
      <Frame>
        <div>one</div>
        <div>two</div>
      </Frame>
    );
  });
});
