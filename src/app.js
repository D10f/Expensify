import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './redux/store/store'
import { addExpense } from './redux/actions/expenses'
import { setTextFilter } from './redux/actions/filters'
import selectExpenses from './redux/selectors/expenses'

import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({
  description: 'Coffee',
  amount: 250
}))
store.dispatch(addExpense({
  description: 'Lunch',
  amount: 2000
}))
store.dispatch(addExpense({
  description: 'Shoes',
  amount: 15000
}))

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
