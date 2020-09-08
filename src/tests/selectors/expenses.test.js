import moment from 'moment'
import selectExpenses from '../../redux/selectors/expenses'
import expenses from '../fixtures/expenses'

const filters = {
  text: 'c',
  sortyBy: 'date',
  startDate: undefined,
  endDate: undefined
}

test('Should filter by text value', () => {
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[1], expenses[2] ])
})

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortyBy: 'date',
    startDate: moment(0).add(1, 'day').valueOf(),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[2], expenses[3] ])
})

test('Should filter by endDate', () => {
  const filters = {
    text: '',
    sortyBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(1, 'month').valueOf()
  }
  const result = selectExpenses(expenses, filters)
  expect(result.length).toBe(3)
  expect(result).toEqual([ expenses[0], expenses[1], expenses[2] ])
})

test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[3], expenses[2], expenses[0], expenses[1] ])
})

test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[0], expenses[3], expenses[2], expenses[1] ])
})
