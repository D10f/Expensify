import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, startEditExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses } from '../../redux/actions/expenses'
import { database } from '../../firebase/firebase'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, amount, createdAt, note }) => {
    expensesData[id] = { description, amount, createdAt, note }
  })
  database.ref('expenses').set(expensesData).then(() => done())
})

test('Should setup a remove expense action object', () => {
  const action = removeExpense({ id: '123abc'})
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' })
})

test('Should setup edit expense action object', () => {
  const action = editExpense('123abc', { description: 'edited', amount: 120 })
  expect(action).toEqual(
    {
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: {
        description: 'edited',
        amount: 120
      }
    }
  )
})

test('Should setup add expense action object', () => {
  const expense = {
    description: 'Rent',
    amount: 20000,
    createdAt: 12035213,
    notes: 'A note from my apartment'
  }
  const action = addExpense(expenses[3])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[3]
  })
})

test('Should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expense = {
    description: 'Mouse with lazers',
    amount: 1200,
    createdAt: 1234567,
    notes: 'Cool'
  }

  store.dispatch(startAddExpense(expense)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expense
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expense)
    done()
  })
})

test('Should add expense to database and store with default values', (done) => {
  const store = createMockStore({})

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        notes: '',
        amount: 100,
        createdAt: 0
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({
      description: '',
      notes: '',
      amount: 100,
      createdAt: 0
    })
    done()
  })
})

test('Should setup set expenses action properly', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses: expenses
  })
})

test('Should asynchronously update the local state and remote db', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses: expenses
    })
    done()
  })
})

test('Should asynchronously remove an expense from local state and remote db', (done) => {
  const store = createMockStore({})
  const id = expenses[3].id
  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('Should asynchronously update an expense from local state and remote db', (done) => {
  const store = createMockStore({})
  const id = expenses[0].id
  const updates = {
    note: 'It works!'
  }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })

    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().note).toBe('It works!')
    done()
  })
})
