var ActionTypes = require('../constants/ActionTypes');

module.exports.addTodo = (content) => ({
  type: ActionTypes.ADD_TODO,
  content
});

module.exports.editTodo = (id, content) => ({
  type: ActionTypes.EDIT_TODO,
  id,
  content
});

module.exports.toggleTodo = (id) => ({
  type: ActionTypes.TOGGLE_TODO,
  id
});

module.exports.deleteTodo = (id) => ({
  type: ActionTypes.DELETE_TODO,
  id
});
