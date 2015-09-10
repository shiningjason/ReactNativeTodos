import React from 'react';
import Input from './Input';

const ESCAPE_KEY = 27;

export default class TodoItem extends React.Component {

  static propTypes = {
    content: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
  };

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
      <div style={styles.container}>
        <input
          type="checkbox"
          style={styles.checkbox}
          checked={completed}
          onChange={onToggle} />
        <label
          style={Object.assign({}, styles.content, completed && styles.completed)}
          onDoubleClick={this.toggleEditable.bind(this)}>
          {content}
        </label>
        <button
          style={styles.deleteBtn}
          onClick={onDelete}>X</button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 21
  },
  checkbox: {
    marginRight: 16,
    marginLeft: 16
  },
  content: {
    flex: 1,
    color: 'rgba(0,0,0,0.87)'
  },
  completed: {
    fontStyle: 'italic',
    fontWeight: 'lighter',
    color: 'rgba(0,0,0,0.54)',
    textDecoration: 'line-through'
  },
  deleteBtn: {
    border: 0,
    background: 'transparent',
    marginRight: 16,
    marginLeft: 16,
    paddingRight: 8,
    paddingLeft: 8,
    color: '#ff4081'
  },
  editField: {
    width: '100%'
  }
};
