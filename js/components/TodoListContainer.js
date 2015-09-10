var React = require('react');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');
var TodoList = require('./TodoList');
var { toggleTodo, editTodo, deleteTodo } = require('../actions/TodoActions');

class TodoListContainer extends React.Component {
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

module.exports = connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => bindActionCreators({ toggleTodo, editTodo, deleteTodo }, dispatch)
)(TodoListContainer);
