import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../redux/actions/filters'

test('Should setup a startDate action object', () => {
  const now = moment()
  expect(setStartDate(now)).toEqual({
    type: 'SET_START_DATE',
    startDate: now
  })
})

test('Should setup an endDate action object', () => {
  const now = moment()
  expect(setEndDate(now)).toEqual({
    type: 'SET_END_DATE',
    endDate: now
  })
})

test('Should setup a filter action with default values', () => {
  expect(setTextFilter()).toEqual({ type: 'SET_TEXT_FILTER', text: '' })
})

test('Should setup a filter action', () => {
  const textValue = 'testing if this works!'
  expect(setTextFilter(textValue)).toEqual({
    type: 'SET_TEXT_FILTER',
    text: textValue
  })
})

test('Should setup an sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('Should setup an sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})
