import React from 'react'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../redux/actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = (e) => {
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  render(){
    return (
      <div>
        <input value={this.props.filters.text} onChange={this.onTextChange}/>
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          onDatesChange={this.onDatesChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          displayFormat="DD/MM/YYYY"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
