import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './expense_list_filters';
import Totals from './expense_totals'
const ExpenseDashboardPage = () => (
  <div>
    <Totals />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
