var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;
var AppContainer = require('./js/components/AppContainer');

var ReactNativeTodos = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <AppContainer platform="android" />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactNativeTodos', () => ReactNativeTodos);
