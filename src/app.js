import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/app_router';
import configureStore from './store/configure_store';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

console.log(store);
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in')
  } else {
    history.push('/');
  }
});