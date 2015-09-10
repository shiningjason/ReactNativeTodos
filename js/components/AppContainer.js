var React = require('react');
var { createStore, combineReducers } = require('redux');
var { Provider } = require('react-redux');
var App = require('./App');
var reducers = require('../reducers');

const composedReducer = combineReducers(reducers);
const store = createStore(composedReducer);

export default class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}
