var React = require('react-native');
var {
  StyleSheet,
  TextInput
} = React;

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: undefined };
  }

  render() {
    const {
      style,
      onSubmitText,
      ...rest
    } = this.props;

    return (
      <TextInput
        {...rest}
        style={[styles.textField, style]}
        value={this.state.value}
        onChangeText={(value) => this.setState({ value })}
        onSubmitEditing={(event) => {
          if (onSubmitText) {
            onSubmitText(event.nativeEvent.text);
            this.setState({ value: undefined });
          }
        }} />
    );
  }
}

const styles = StyleSheet.create({
  textField: {
    borderColor:'rgba(0,0,0,0.12)',
    borderWidth: 1,
    padding: 8,
    height: 32,
    fontSize: 15
  }
});

module.exports = Input;
