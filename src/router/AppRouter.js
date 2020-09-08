import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/pages/Dashboard'
import AddExpensePage from '../components/pages/AddExpense'
import EditExpensePage from '../components/pages/EditExpense'
import HelpPage from '../components/pages/HelpPage'
import NotFound from '../components/pages/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default AppRouter
