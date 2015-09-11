var React = require('react-native');
var {
  View
} = React;
var shortid = require('shortid');
var HeaderContainer = require('./HeaderContainer');
var AddTodoInputContainer = require('./AddTodoInputContainer');
var TodoListContainer = require('./TodoListContainer');

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderContainer username="Jason" />
        <View style={styles.inputContainer}>
          <AddTodoInputContainer />
        </View>
        <TodoListContainer />
      </View>
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
