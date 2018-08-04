import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './expenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
