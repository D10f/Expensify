import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/pages/EditExpense'
import expenses from '../fixtures/expenses'

let wrapper, history, startEditExpense, startRemoveExpense

beforeEach(() => {
  startEditExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage history={history} expense={expenses[2]} startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} />)
})

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle onClick correctly', () => {
  wrapper.find('button').prop('onClick')()
  expect(startRemoveExpense).toHaveBeenCalledWith(expenses[2].id)
  expect(history.push).toHaveBeenCalledWith('/')
})

test('Should handle onSubmit correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(startEditExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2])
  expect(history.push).toHaveBeenCalledWith('/')
})
