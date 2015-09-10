import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo, editTodo, deleteTodo } from '../actions/TodoActions';

@connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => bindActionCreators({ toggleTodo, editTodo, deleteTodo }, dispatch)
)
export default class TodoListContainer extends React.Component {
  render() {
    return (
      <TodoList
        {...this.props}
        todos={this.props.todos}
        onToggle={this.props.toggleTodo}
        onEdit={this.props.editTodo}
        onDelete={this.props.deleteTodo} />
    );
  }
}
