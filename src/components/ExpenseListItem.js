import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';
const ExpenseListItem = (props) => (
    <div>
        <h3>Description: {props.description}</h3>
        <h3>Created: {props.createdAt}</h3>
        <h3>Amount: {props.amount}</h3>

        <button onClick={ () => {
         props.dispatch(removeExpense({id: props.id}));
        }}>Remove</button>
    </div>
);



export default connect()(ExpenseListItem);