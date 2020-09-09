import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
// import 'react-dates/lib/css/_datepicker.css' had to create a separate css file for this

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      notes: props.expense ? props.expense.notes : '',
      calendarFocused: false,
      error: ''
    }
  }

  onInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(() => ({ [name]: value }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value

    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt){
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onFormSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount){
      this.setState(() => ({ error: 'Please provide a description and amount for this expense.' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(), // to return time in ms
        notes: this.state.notes
      })
    }
  }
  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <label style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Description</b>
          <input
            onChange={this.onInputChange}
            value={this.state.description}
            name="description"
            type="text"
            placeholder="e.g., Lunch with friends"
            autoFocus
          />
        </label>
        <label>
          <b>Amount</b>
          <input
            onChange={this.onAmountChange}
            value={this.state.amount}
            name="amount"
            type="text"
            placeholder="e.g.: 2.35"
          />
        </label>
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="DD/MM/YYYY"
        />
        <textarea
          onChange={this.onInputChange}
          value={this.state.notes}
          name="notes"
          placeholder="Add a note for this expense (optional)"></textarea>
        <button>{this.props.expense ? 'Update Expense' : 'Create New Expense'}</button>
      </form>
    )
  }
}

export default ExpenseForm
