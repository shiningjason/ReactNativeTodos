var React = require('react');
var { connect } = require('react-redux');
var Header = require('./Header');

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

module.exports = connect((state) => ({
  todoNumber: state.todos.count((todo) => !todo.completed)
}))(HeaderContainer);
