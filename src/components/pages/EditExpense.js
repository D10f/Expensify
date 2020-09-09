import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../../redux/actions/expenses'
import { database } from '../../firebase/firebase'
import ExpenseForm from '../ExpenseForm'

export class EditExpensePage extends React.Component {

  onClick = () => {
    database.ref(`expenses/${this.props.expense.id}`).remove().then(() => this.props.history.push('/'))
    // this.props.removeExpense({ id: this.props.expense.id })
  }

  onSubmit = (updatedExpense) => {
    database.ref(`expenses/${this.props.expense.id}`).update(updatedExpense).then(() => this.props.history.push('/'))
    // this.props.editExpense(this.props.expense.id, updatedExpense)
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
//
// const mapDispatchToProps = (dispatch) => ({
//   editExpense: (id, updates) => dispatch(editExpense(id, updates)),
//   removeExpense: (id) => dispatch(removeExpense(id))
// })

export default connect(mapStateToProps)(EditExpensePage)
