import React from 'react'
import ExpenseList from '../ExpenseList'
import ExpenseListFilters from '../ExpenseListFilters'

export const Dashboard = () => (
  <section>
    <header>These are your current expenses:</header>
    <ExpenseListFilters />
    <ExpenseList />
  </section>
)

export default Dashboard
