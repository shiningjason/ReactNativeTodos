import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo } from '../actions/TodoActions';

@connect(
  undefined,
  (dispatch) => bindActionCreators({ addTodo }, dispatch)
)
export default class AddTodoInputContainer extends React.Component {
  render() {
    const { addTodo, ...rest } = this.props;
    return (
      <Input {...rest} onSubmitEditing={addTodo} />
    );
  }
}
