import React from 'react';
import shortid from 'shortid';
import HeaderContainer from './HeaderContainer';
import AddTodoInputContainer from './AddTodoInputContainer';
import TodoListContainer from './TodoListContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <HeaderContainer username="Jason" />
        <div style={styles.inputContainer}>
          <AddTodoInputContainer />
        </div>
        <TodoListContainer />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 550,
    margin: '0 auto'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8
  }
};
