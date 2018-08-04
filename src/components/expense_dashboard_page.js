import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './expense_list_filters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
