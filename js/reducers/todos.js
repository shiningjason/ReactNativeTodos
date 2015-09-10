import Immutable from 'immutable';
import shortid from 'shortid';
import ActionTypes from '../constants/ActionTypes';

const TodoRecord = Immutable.Record({
  id: undefined,
  content: undefined,
  completed: false
});

const _createTodoRecord = (todo) => new TodoRecord({
  id: shortid(),
  content: todo.content,
  completed: todo.completed || false
});

const _findIndexById = (todos, id) => todos.findIndex((todo) => todo.id === id);

const _addTodo = (todos, content) =>
  todos.push(_createTodoRecord({ content }));

const _toggleTodo = (todos, id) =>
  todos.update(_findIndexById(todos, id), (todo) => todo.set('completed', !todo.completed));

const _deleteTodo = (todos, id) =>
  todos.delete(_findIndexById(todos, id));

const _editTodo = (todos, id, content) =>
  todos.update(_findIndexById(todos, id), (todo) => todo.set('content', content));

const DEFAULT_TODOS = [
  { content: '準備 React & Flux 教育訓練' },
  { content: '繳電話費' },
  { content: '繳房租' },
  { content: '週會會議記錄', completed: true }
].map(_createTodoRecord);

export default (state = Immutable.List(DEFAULT_TODOS), action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return _addTodo(state, action.content);

    case ActionTypes.EDIT_TODO:
      return _editTodo(state, action.id, action.content);

    case ActionTypes.TOGGLE_TODO:
      return _toggleTodo(state, action.id);

    case ActionTypes.DELETE_TODO:
      return _deleteTodo(state, action.id);
  }
  return state;
};
