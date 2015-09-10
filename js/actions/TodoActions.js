import ActionTypes from '../constants/ActionTypes';

export const addTodo = (content) => ({
  type: ActionTypes.ADD_TODO,
  content
});

export const editTodo = (id, content) => ({
  type: ActionTypes.EDIT_TODO,
  id,
  content
});

export const toggleTodo = (id) => ({
  type: ActionTypes.TOGGLE_TODO,
  id
});

export const deleteTodo = (id) => ({
  type: ActionTypes.DELETE_TODO,
  id
});
