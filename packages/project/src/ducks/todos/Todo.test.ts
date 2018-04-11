import Todo from './Todo';

describe('Todo', () => {
  const todoDefault = {
    completed: false,
    id: 0,
    title: 'title',
    userID: 0,
  };

  it('get id', () => {
    const todo = new Todo(todoDefault);
    const id = todo.get('id');
    const result = 0;
    expect(id).toBe(result);
  });
});
