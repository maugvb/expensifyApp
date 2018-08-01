import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import {DateRangePicker} from 'react-dates';
import uuid from 'uuid';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocus: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocus) => {
        this.setState(() => ({
            calendarFocus
        }))
    };
    render() {
        console.log(this.props)
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => { this.props.dispatch(setTextFilter(e.target.value)) }} />

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value == 'amount') {
                            this.props.dispatch(sortByAmount({ amount: this.props.amount }))
                        } else if (e.target.value == 'date') {
                            this.props.dispatch(sortByDate({ date: this.props.amount }))
                        }
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocus}
                    onFocusChange={this.onFocusChange}
                    startDateId={uuid()}
                    endDateId={uuid()}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}

                />
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);