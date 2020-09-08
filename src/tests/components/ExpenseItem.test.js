import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseItem } from '../../components/ExpenseItem'
import expenses from '../fixtures/expenses'

test('Should render ExpenseItem', () => {
  const wrapper = shallow(<ExpenseItem {...expenses[2]} />)
  expect(wrapper).toMatchSnapshot()
})
