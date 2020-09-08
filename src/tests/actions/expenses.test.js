import { addExpense, editExpense, removeExpense } from '../../redux/actions/expenses'

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
  const action = addExpense(expense)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String) // because uuid is generated every time
    }
  })
})

test('Should setup add expense action object with default values', () => {
  const action = addExpense({})
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      notes: '',
      amount: 100,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})
