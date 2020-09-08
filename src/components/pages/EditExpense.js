import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../../redux/actions/expenses'
import ExpenseForm from '../ExpenseForm'

export class EditExpensePage extends React.Component {

  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }

  onSubmit = (updatedExpense) => {
    this.props.editExpense(this.props.expense.id, updatedExpense)
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
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (id) => dispatch(removeExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
