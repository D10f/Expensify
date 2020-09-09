import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../redux/selectors/expenses'
import selectTotalExpenses from '../redux/selectors/expenses-total'

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <header>
      <p>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</p>
    </header>
  )
}
const mapStateToProps = (state) => {
  const expensesCount = selectExpenses(state.expenses, state.filters)
  const expensesTotal = selectTotalExpenses(expensesCount)
  return {
    expensesCount: expensesCount.length,
    expensesTotal
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
