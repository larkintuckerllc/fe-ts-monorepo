import React, { Component } from 'react';

interface ExternalProps {
  style?: React.CSSProperties;
}

export interface InjectedProps {
  clickCount: number;
}

interface State {
  clickCount: number;
}

interface Options {
  debug?: boolean;
}

export default ({ debug = false }: Options = {}) => <TOriginalProps extends {}>(
  WrappedComponent:
    | React.ComponentClass<TOriginalProps & InjectedProps>
    | React.StatelessComponent<TOriginalProps & InjectedProps>
) => {
  type ResultProps = TOriginalProps & ExternalProps;
  const result = class ClickCounted extends Component<ResultProps, State> {
    public static displayName = `ClickCounted(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    constructor(props: ResultProps) {
      super(props);
      this.state = {
        clickCount: 0,
      };
    }

    public render() {
      const { style } = this.props;
      const { clickCount } = this.state;
      return (
        <div>
          <h2>HOC</h2>
          <div id="test_root" onClick={this.handleClick} style={style}>
            <span>Clicked {clickCount} times</span>
            <WrappedComponent {...this.props} {...this.state} />
          </div>
        </div>
      );
    }

    private handleClick = () => {
      if (debug) {
        /* tslint:disable-next-line */
        console.log('Clicked');
      }
      this.setState(state => ({ clickCount: state.clickCount + 1 }));
    };
  };

  return result;
};
