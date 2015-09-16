var React = require('react-native');
var { PropTypes } = React;
var { createStore, combineReducers } = require('redux');
var { Provider } = require('react-redux/native');
var App = require('./App');
var reducers = require('../reducers');

const composedReducer = combineReducers(reducers);
const store = createStore(composedReducer);

class AppContainer extends React.Component {

  getChildContext() {
    return { platform: this.props.platform };
  }

  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppContainer.propTypes = {
  platform: PropTypes.string.isRequired
};

AppContainer.childContextTypes = {
  platform: PropTypes.string.isRequired
};

module.exports = AppContainer;
