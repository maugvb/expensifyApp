import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
       <Link to={`/edit/${props.id}`}>
            <h3>Description: {props.description}</h3>
        </Link>

        <h3>Created: {props.createdAt}</h3>
        <h3>Amount: {props.amount}</h3>
    </div>
);



export default ExpenseListItem;