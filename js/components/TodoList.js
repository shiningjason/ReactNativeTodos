var React = require('react-native');
var {
  ListView,
  StyleSheet,
  View
} = React;
var Immutable = require('immutable');
var TodoItem = require('./TodoItem');

var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class TodoList extends React.Component {
  render() {
    const { todos, onToggle, onEdit, onDelete } = this.props;
    console.log(todos);

    return (
      <ListView
        style={styles.todoList}
        dataSource={ds.cloneWithRows(todos.toArray())}
        renderRow={(todo) => (
          <View style={styles.todoItem}>
            <TodoItem
              content={todo.content}
              completed={todo.completed}
              onToggle={() => onToggle(todo.id)}
              onEdit={(content) => onEdit(todo.id, content)}
              onDelete={() => onDelete(todo.id)} />
          </View>
        )} />
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.instanceOf(Immutable.List).isRequired,
  onToggle: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  todoList: {
    marginHorizontal: 16,
    borderTopColor: 'rgba(0,0,0,0.12)',
    borderTopWidth: 1
  },
  todoItem: {
    paddingVertical: 8,
    borderBottomColor: 'rgba(0,0,0,0.12)',
    borderBottomWidth: 1 
  }
});

module.exports = TodoList;
