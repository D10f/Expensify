import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import filters from '../fixtures/filters'

let actions, wrapper

beforeEach(() => {
  actions = {
    setTextFilter: jest.fn(),
    sortByDate: jest.fn(),
    sortByAmount: jest.fn(),
    setStartDate: jest.fn(),
    setEndDate: jest.fn()
  }
  wrapper = shallow(<ExpenseListFilters {...actions} filters={filters} />)
})

test('Should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle text filter updates', () => {
  const text = 'Coffee Shop'
  wrapper.find('input').prop('onChange')({ target: { value: text }})
  expect(actions.setTextFilter).toHaveBeenCalledWith(text)
})

test('Should handle sortBy amount', () => {
  const option = 'amount'
  wrapper.find('select').prop('onChange')({ target: { value: option }})
  expect(actions.sortByAmount).toHaveBeenCalled()
})

test('Should handle sortBy date', () => {
  const option = 'date'
  wrapper.find('select').prop('onChange')({ target: { value: option }})
  expect(actions.sortByDate).toHaveBeenCalled()
})

test('Should handle calendar focus update', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(true)
  expect(wrapper.state('calendarFocused')).toBe(true)
})

test('Should handle setStartDate function calls', () => {
  const startDate = moment().add(1, 'day')
  const endDate = moment().subtract(2, 'weeks')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(actions.setStartDate).toHaveBeenCalledWith(startDate)
  expect(actions.setEndDate).toHaveBeenCalledWith(endDate)
})
