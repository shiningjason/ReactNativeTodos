import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from '../reducers';

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
