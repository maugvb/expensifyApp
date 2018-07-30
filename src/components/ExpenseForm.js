import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment();

console.log(now.format('MMM Do, YYYY'))
class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0,
        createdAt: moment(),
        calendarFocused: false,
        error: undefined
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }


    onSubmitForm = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount){
            //Set error 'please provide description and amount'
            this.setState(()=>({
                error:'please provide description and amount'
            }))
        }else{
            this.setState(()=>({
                error:undefined
            }))
            this.props.onSubmit({
                description: this.state.description, 
                note: this.state.note, 
                createdAt: this.state.createdAt.valueOf(), 
                amount:parseFloat(this.state.amount, 10) * 100
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input type='text' placeholder='Decription' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type='text' placeholder='Amount' onChange={this.onAmountChange} value={this.state.amount} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.onNoteChange} />
                    <button> Add Expense</button>
                </form>
            </div>
        );
    }
}

export default connect()(ExpenseForm)