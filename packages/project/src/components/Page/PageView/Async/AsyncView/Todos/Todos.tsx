import { TodoJS } from 'DUCKS/todos/Todo';
import React from 'react';

interface TodosProps {
  todos: TodoJS[];
}
const Todos = ({ todos }: TodosProps) => {
  return <ul>{todos.map(o => <li key={o.id}>{o.title}</li>)}</ul>;
};
export default Todos;
