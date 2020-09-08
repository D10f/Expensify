import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/pages/AddExpense'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
  addExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should fire onSubmit correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(addExpense).toHaveBeenCalledWith(expenses[1])
  expect(history.push).toHaveBeenCalledWith('/')
})
