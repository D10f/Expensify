import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render ExpenseForm correctly (add expense)', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with expense data (edit expense)', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('Should render error on invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('Should set description on input change', () => {
  const name = 'description'
  const value = 'new description'

  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', { target: { name, value } })
  expect(wrapper.state('description')).toBe(value)
})

test('Should set amount on input change', () => {
  const value = '45.12'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', { target: { value } })
  expect(wrapper.state('amount')).toBe(value)
})

test('Should NOT set amount on input change', () => {
  const value = '45.12213125'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', { target: { value } })
  expect(wrapper.state('amount')).toBe('')
})

test('Should submit "props.onSubmit" on form submittion', () => {
  const description = 'Does this submit'
  const amount = '12.12'

  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', { preventDefault: () => {} })

  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    notes: expenses[0].notes
  })
})

test('Should update expense fields and submit "props.onSubmit" on form submittion', () => {
  const name = 'description'
  const value = 'The newest of all descriptions'
  const amount = '51.09'

  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm onSubmit={onSubmitSpy} />)

  wrapper.find('input').at(0).simulate('change', { target: { name, value }})
  wrapper.find('input').at(1).simulate('change', { target: { value: amount }})
  wrapper.find('form').simulate('submit', { preventDefault: () => {} })

  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: value,
    amount:parseFloat(amount, 10) * 100,
    createdAt: moment().valueOf(),
    notes: ''
  })
})

test('Should set a new date onChangeDate handler', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toBe(now)
})

test('Should set new focused state onFocusChange hander', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})
