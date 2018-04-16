import React from 'react';

interface FrameProps {
  children: JSX.Element | JSX.Element[];
}

const Frame = ({ children }: FrameProps) => <div style={{ border: 'solid' }}>{children}</div>;
export default Frame;
