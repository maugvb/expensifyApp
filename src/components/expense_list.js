import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import ExpenseListItem from './expense_list_item';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
