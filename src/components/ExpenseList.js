import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../redux/selectors/expenses'
import ExpenseItem from './ExpenseItem'

export const ExpenseList = ({ expenses }) => (
  <ul>
    {
      expenses.length === 0
      ? (<li>No expenses found</li>)
      : ( expenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        )))
    }
  </ul>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
