import React from 'react'
import ExpenseSummary from '../ExpenseSummary'
import ExpenseList from '../ExpenseList'
import ExpenseListFilters from '../ExpenseListFilters'

export const Dashboard = () => (
  <section>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </section>
)

export default Dashboard
