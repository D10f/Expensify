import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/pages/AddExpense'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {
  startAddExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should fire onSubmit correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(startAddExpense).toHaveBeenCalledWith(expenses[1])
  expect(history.push).toHaveBeenCalledWith('/')
})
