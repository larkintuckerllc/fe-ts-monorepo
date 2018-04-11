import { todosInitialState } from './TodosState';

describe('TodoState', () => {
  it('get errored', () => {
    const errored = todosInitialState.get('errored');
    expect(errored).toBe(false);
  });
});
