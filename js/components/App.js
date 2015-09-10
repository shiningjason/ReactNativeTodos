var React = require('react');
var shortid = require('shortid');
var HeaderContainer = require('./HeaderContainer');
var AddTodoInputContainer = require('./AddTodoInputContainer');
var TodoListContainer = require('./TodoListContainer');

class App extends React.Component {
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

module.exports = App;
