import React from 'react'
import { connect } from 'react-redux'
import { startAddExpense } from '../../redux/actions/expenses'
import { database } from '../../firebase/firebase'
import ExpenseForm from '../ExpenseForm'

export const AddExpensePage = (props) => {

  const onSubmit = (expense) => {
    // database.ref('expenses').push(expenseData).then(() => props.history.push('/'))
    props.startAddExpense(expense)
    props.history.push('/')
  }

  return (
    <section>
      <h3>Create New Expense</h3>
      <ExpenseForm onSubmit={onSubmit} />
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
