import React from 'react'
import { connect } from 'react-redux'
// import { addExpense } from '../../redux/actions/expenses'
import { database } from '../../firebase/firebase'
import ExpenseForm from '../ExpenseForm'

export const AddExpensePage = (props) => {

  const onSubmit = (expenseData) => {
    database.ref('expenses').push(expenseData).then(() => props.history.push('/'))
    // props.addExpense(expense)
  }

  return (
    <section>
      <h3>Create New Expense</h3>
      <ExpenseForm onSubmit={onSubmit} />
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
