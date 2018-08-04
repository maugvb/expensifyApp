import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './expenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
