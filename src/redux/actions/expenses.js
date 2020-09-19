// import { v4 as uuid } from 'uuid'
import { database } from '../../firebase/firebase'

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

/*
 * Compared to 'regular' action generators that return an object
 * With redux thunk we can return also functions that get called immediately
 */

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    // Destructure from expenseData, with default values
    const {
      description = '',
      notes = '',
      amount = 100,
      createdAt = 0
    } = expenseData

    const expense = { description, amount, notes, createdAt }

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
}

export const editExpense = (id, updates = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = []
        snapshot.forEach(expense => {
          expenses.push({
            id: expense.key,
            ...expense.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
  }
}
