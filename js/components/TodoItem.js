var React = require('react-native');
var {
  StyleSheet,
  SwitchIOS,
  Text,
  TouchableOpacity,
  View
} = React;
var Input = require('./Input');

const ESCAPE_KEY = 27;

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { editable: false };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editable && this.state.editable) {
      const node = React.findDOMNode(this.refs.editField);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  toggleEditable() {
    this.setState({
      editable: !this.state.editable
    });
  }

  render() {
    const { content, completed, onToggle, onEdit, onDelete } = this.props;

    if (this.state.editable) {
      return (
        <Input
          ref="editField"
          style={styles.editField}
          defaultValue={content}
          onSubmitEditing={(content) => {
            if (content !== '') onEdit(content);
            this.toggleEditable();
          }}
          onBlur={(event) => {
            const content = event.target.value;
            if (content !== '') onEdit(content);
            this.toggleEditable();
          }}
          onKeyDown={(evt) => {
            if (evt.keyCode === ESCAPE_KEY) {
              event.preventDefault();
              this.toggleEditable();
            }
          }} />
      );
    }

    return (
      <View style={styles.container}>
        <SwitchIOS
          type="checkbox"
          style={styles.checkbox}
          checked={completed}
          onChange={onToggle} />
        <TouchableOpacity style={styles.contentContainer}>
          <Text
            style={[styles.content, completed && styles.completed]}
            onDoubleClick={this.toggleEditable.bind(this)}>
            {content}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtnContainer}>
          <Text
            style={styles.deleteBtn}
            onClick={onDelete}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

TodoItem.propTypes = {
  content: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4
  },
  checkbox: {
    marginRight: 8
  },
  contentContainer: {
    flex: 1,
    marginRight: 8
  },
  content: {
    fontSize: 15,
    color: 'rgba(0,0,0,0.87)'
  },
  completed: {
    fontStyle: 'italic',
    fontWeight: '300',
    color: 'rgba(0,0,0,0.54)',
    textDecorationLine: 'line-through'
  },
  deleteBtn: {
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#ff4081'
  },
  editField: {
    // width: '100%'
  }
});

module.exports = TodoItem;
