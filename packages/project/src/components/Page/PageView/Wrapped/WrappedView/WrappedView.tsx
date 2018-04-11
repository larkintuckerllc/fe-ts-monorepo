import { InjectedProps } from 'COMPONENTS/hoc';
import React from 'react';

export interface WrappedViewProps {
  text: string;
}
const WrappedView = (props: WrappedViewProps & InjectedProps) => {
  const { clickCount, text } = props;
  return (
    <div>
      <p>{text}</p>
      <p>{clickCount >= 5 ? 'Easy there!' : 'Bring it!'}</p>
    </div>
  );
};
export default WrappedView;
