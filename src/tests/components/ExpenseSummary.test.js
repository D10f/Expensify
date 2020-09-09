import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ExpenseSummary />)
})

test('Should render ExpenseSummary correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
