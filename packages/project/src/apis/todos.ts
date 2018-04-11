const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
export const fetchTodos = async () => {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return json;
};
