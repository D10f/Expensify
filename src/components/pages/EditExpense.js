import React from 'react'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../../redux/actions/expenses'
import { database } from '../../firebase/firebase'
import ExpenseForm from '../ExpenseForm'

export class EditExpensePage extends React.Component {

  onClick = () => {
    // database.ref(`expenses/${this.props.expense.id}`).remove().then(() => this.props.history.push('/'))
    this.props.startRemoveExpense(this.props.expense.id)
    this.props.history.push('/')
  }

  onSubmit = (updatedExpense) => {
    // database.ref(`expenses/${this.props.expense.id}`).update(updatedExpense).then(() => this.props.history.push('/'))
    this.props.startEditExpense(this.props.expense.id, updatedExpense)
    this.props.history.push('/')
  }

  render(){
    return (
      <section>
        <button onClick={this.onClick}>Delete Expense</button>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
