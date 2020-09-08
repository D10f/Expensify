import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../../redux/actions/expenses'
import ExpenseForm from '../ExpenseForm'

export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.addExpense(expense)
    this.props.history.push('/')
  }

  render(){
    return (
      <section>
        <h3>Create New Expense</h3>
        <ExpenseForm
          expense={{}}
          onSubmit={this.onSubmit} />
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispath(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
