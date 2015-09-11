var React = require('react-native');
var {
  StyleSheet,
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    marginBottom: 8,
    paddingHorizontal: 16
  }
});

module.exports = App;
