import { fetchTodos } from './todos';

describe('todos api', () => {
  it('fetchTodos resolves', () => {
    const todos = [
      {
        completed: false,
        id: 0,
        title: 'title',
        userId: 0,
      },
    ];
    const json = jest.fn().mockImplementation(() => Promise.resolve(todos));
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json,
      })
    );
    return fetchTodos().then(response => {
      expect(response).toBe(todos);
    });
  });
});
