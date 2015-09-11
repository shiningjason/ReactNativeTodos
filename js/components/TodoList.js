var React = require('react-native');
var {
  ListView
} = React;
var Immutable = require('immutable');
var TodoItem = require('./TodoItem');

var ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class TodoList extends React.Component {
  render() {
    const { todos, onToggle, onEdit, onDelete } = this.props;

    return (
      <ListView
        style={styles.todoList}
        dataSource={ds.cloneWithRows(todos.values())}
        renderRow={(todo) => (
          <TodoItem
            content={todo.content}
            completed={todo.completed}
            onToggle={() => onToggle(todo.id)}
            onEdit={(content) => onEdit(todo.id, content)}
            onDelete={() => onDelete(todo.id)} />
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

const styles = {
  todoList: {
    padding: 0,
    listStyle: 'none',
    borderTop: '1px solid rgba(0,0,0,0.12)'
  },
  todoItem: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: '1px solid rgba(0,0,0,0.12)'
  }
};

module.exports = TodoList;
