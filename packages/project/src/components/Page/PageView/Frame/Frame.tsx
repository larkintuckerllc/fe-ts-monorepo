import React from 'react';

interface FrameProps {
  children: JSX.Element | JSX.Element[];
}

const Frame = ({ children }: FrameProps) => {
  return <div style={{ border: 'solid' }}>{children}</div>;
};
export default Frame;
