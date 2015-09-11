var React = require('react-native');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux/native');
var Input = require('./Input');
var { addTodo } = require('../actions/TodoActions');

class AddTodoInputContainer extends React.Component {
  render() {
    const { addTodo, ...rest } = this.props;
    return (
      <Input
        placeholder="新增待辦事項 :p"
        returnKeyType="send"
        {...rest}
        onSubmitText={addTodo} />
    );
  }
}

module.exports = connect(
  undefined,
  (dispatch) => bindActionCreators({ addTodo }, dispatch)
)(AddTodoInputContainer);
