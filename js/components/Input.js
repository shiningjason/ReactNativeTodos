import React from 'react';

const ENTER_KEY = 13;

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue || '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.handleEnter(event);
        break;
    }

    const { onKeyDown } = this.props;
    onKeyDown && onKeyDown(event);
  }

  handleEnter(event) {
    event.preventDefault();

    const { onSubmitEditing } = this.props;
    if (onSubmitEditing) {
      onSubmitEditing(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        {...this.props}
        type="text"
        style={Object.assign({}, styles.textField, this.props.style)}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)} />
    );
  }
}

const styles = {
  textField: {
    border: '1px solid rgba(0,0,0,0.12)',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    height: 32,
    fontSize: 15
  }
};
