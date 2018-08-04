import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { connect } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import ExpenseForm from './expense_form';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
