import moment from 'moment'
import filterReducer from '../../redux/reducers/filterReducer'

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('Should return a state object with default values', () => {
  expect(filterReducer(undefined, { type: '@@INIT' })).toEqual(defaultState)
})

test('Should return a default state using invalid data', () => {
  const action = { type: 'SORT_YB_AMOUNT' }
  expect(filterReducer(undefined, action)).toEqual(defaultState)
})

test('Should return state that sorts by date (default case)', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filterReducer(defaultState, action)
  expect(state.sortBy).toBe('date')
})

test('Should return state that sorts by amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' }
  const state = filterReducer(undefined, action)
  expect(state.sortBy).toBe('amount')
})

test('Should return state with text property updated', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'Welcome to the jungle'
  }
  const state = filterReducer(undefined, action)
  expect(state.text).toBe(action.text)
})

test('Should return state with startDate property updated', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0).subtract(3, 'days').valueOf()
  }
  const state = filterReducer(undefined, action)
  expect(state.startDate).toBe(action.startDate)
})

test('Should return state with startDate property updated', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0).add(1, 'week').valueOf()
  }
  const state = filterReducer(undefined, action)
  expect(state.endDate).toBe(action.endDate)
})
