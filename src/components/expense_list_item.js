import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
