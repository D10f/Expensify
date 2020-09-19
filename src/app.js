import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import { startSetExpenses } from './redux/actions/expenses'
import configureStore from './redux/store/store'
import './styles/styles.scss'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})
