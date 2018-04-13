import Ajv from 'ajv';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
const SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  description: 'Todo set',
  items: {
    description: 'Todo',
    properties: {
      completed: {
        description: 'Whether completed',
        type: 'boolean',
      },
      id: {
        description: 'The unique identifier',
        type: 'integer',
      },
      title: {
        description: 'The title',
        type: 'string',
      },
      userId: {
        description: 'The user id of the creator',
        type: 'number',
      },
    },
    required: ['completed', 'id', 'title', 'userId'],
    title: 'Todo',
    type: 'object',
  },
  title: 'Todo set',
  type: 'array',
};
const ajv = new Ajv();
const validate = ajv.compile(SCHEMA);
export const fetchTodos = async () => {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  const valid = validate(json);
  if (!valid) {
    throw new Error();
  }
  return json;
};
