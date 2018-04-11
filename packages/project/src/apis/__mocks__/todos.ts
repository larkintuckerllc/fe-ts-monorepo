const todoDefault = {
  completed: false,
  id: 0,
  title: 'title',
  userID: 0,
};

let error = false;

export const setError = (value: boolean): void => {
  error = value;
};

export const fetchTodos = () => (error ? Promise.reject('500') : Promise.resolve([todoDefault]));
