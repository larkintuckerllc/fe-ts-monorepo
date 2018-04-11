import { appStateInitial } from './AppState';

describe('AppState', () => {
  it('get counter', () => {
    const counter = appStateInitial.get('counter');
    expect(counter).toBe(0);
  });
});
