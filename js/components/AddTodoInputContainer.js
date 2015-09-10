var React = require('react');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');
var Input = require('./Input');
var { addTodo } = require('../actions/TodoActions');

class AddTodoInputContainer extends React.Component {
  render() {
    const { addTodo, ...rest } = this.props;
    return (
      <Input {...rest} onSubmitEditing={addTodo} />
    );
  }
}

module.exports = connect(
  undefined,
  (dispatch) => bindActionCreators({ addTodo }, dispatch)
)(AddTodoInputContainer);
