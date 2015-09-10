import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

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
