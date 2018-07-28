import React from 'react';

const ExpenseListItem = (props) => (
    <div>
        <h3>Description: {props.description}</h3>
        <h3>Created: {props.createdAt}</h3>
        <h3>Amount: {props.amount}</h3>
    </div>
);



export default ExpenseListItem;