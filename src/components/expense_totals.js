import React from 'react';
import expensesTotal from '../selectors/expenses_total';
import {connect} from 'react-redux';
import numeral from 'numeral';

const Totals = (props) => (
    <div>Totals: {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}</div>
);


const mapStateToProps = (state) => {
    return {
    expenses: state.expenses
    }
}

export default connect(mapStateToProps)(Totals)