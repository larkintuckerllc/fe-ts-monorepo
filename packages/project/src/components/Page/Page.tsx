import * as fromAdder from 'DUCKS/adder';
import * as fromCounter from 'DUCKS/counter';
import { List } from 'immutable';
import { connect } from 'react-redux';
import AppState from 'STORE/AppState';
import PageView from './PageView';

interface StateProps {
  adder: List<string>;
  counter: number;
}

interface DispatchProps {
  add(value: string): void;
  decrement(): void;
  increment(): void;
}

const mapStateToProps = (state: AppState) => {
  return {
    adder: fromAdder.getAdder(state),
    counter: fromCounter.getCounter(state),
  };
};

const mapDispatchToProps = {
  add: fromAdder.add,
  decrement: fromCounter.decrement,
  increment: fromCounter.increment,
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(PageView);
