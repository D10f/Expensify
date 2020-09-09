import selectTotalExpenses from '../../redux/selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 for a list with no expenses', () => {
  expect(selectTotalExpenses([])).toBe(0)
})

test('Should add a single expense successfully', () => {
  expect(selectTotalExpenses([expenses[1]])).toBe(expenses[1].amount)
})

test('Should return the total amount from array of expense objects', () => {
  const result = selectTotalExpenses(expenses)
  expect(result).toBe(2515)
})
