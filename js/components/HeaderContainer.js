var React = require('react');
var { connect } = require('react-redux');
var Header = require('./Header');

@connect((state) => ({
  todoNumber: state.todos.count((todo) => !todo.completed)
}))
export default class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}
