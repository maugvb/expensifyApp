import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 1000}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2000 }));
store.dispatch(addExpense({ description: 'Rent' , amount: 20000}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(state);

ReactDOM.render(
    <Provider store={store}>
    <AppRouter />
    </Provider>, document.getElementById('app'));
