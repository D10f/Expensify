import moment from 'moment'
import expenseReducer from '../../redux/reducers/expenseReducer'
import expenses from '../fixtures/expenses'

test('Should set state to default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[2].id }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[1], expenses[3] ])
})

test('Should NOT remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: -1 }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(state)
})

test('Should update amount property from an expense by id', () => {
  const action = { type: 'EDIT_EXPENSE', id: expenses[3].id, updates: { amount: 777 } }
  const state = expenseReducer(expenses, action)
  expect(state[3].amount).toBe(777)
})

test('Should NOT update expense if id not found', () => {
  const action = { type: 'EDIT_EXPENSE', id: -1, updates: { amount: 777 } }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(state)
})

test('Should add new expense with provided values', () => {
  const expense = {
    description: 'CD',
    amount: 8,
    note: '',
    createdAt: 0
  }
  const action = { type: 'ADD_EXPENSE', expense }
  const state = expenseReducer(expenses, action)
  expect(state[state.length - 1]).toEqual(expense)
  expect(state[state.length - 1].amount).toBe(8)
})

test('Should add new expense with default values', () => {
  const expense = {
    description: 'CD',
    amount: 8,
    note: 'The newest and greatest of The Beach Boys!',
    createdAt: 1502191
  }
  const action = { type: 'ADD_EXPENSE', expense }
  const state = expenseReducer(expenses, action)
  expect(state[state.length - 1]).toEqual(expense)
})
