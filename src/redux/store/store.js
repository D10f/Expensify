import { createStore, combineReducers } from 'redux'
import expenseReducer from '../reducers/expenseReducer'
import filterReducer from '../reducers/filterReducer'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}

// store.subscribe(() => {
//   const state = store.getState()
//   const visibleExpenses = getExpenses(state.expenses, state.filters)
//   console.log(visibleExpenses)
// })
//
// const expenseOne = store.dispatch(addExpense({
//   description: 'Bought a course on React.js',
//   notes: 'Great course so far!',
//   amount: 100,
//   createdAt: 400
// }))
//
// const expenseTwo = store.dispatch(addExpense({
//   description: 'Went to get some coffee to study React.js',
//   amount: 250,
//   createdAt: 300
// }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400, notes: 'Arrrghh!', description: 'Vanilla Latte' }))
// store.dispatch(setTextFilter('Reactsdfsd'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(122))
// store.dispatch(setEndDate(100))
// store.dispatch(setStartDate())
