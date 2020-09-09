import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './redux/store/store'
import { addExpense, editExpense, removeExpense } from './redux/actions/expenses'
import { setTextFilter } from './redux/actions/filters'
import selectExpenses from './redux/selectors/expenses'
import { database } from './firebase/firebase'
import './styles/styles.scss'

const store = configureStore()

class App extends React.Component {
  constructor(props){
    super(props)
    // child_removed
    database.ref('expenses').on('child_removed', (snapshot) => {
      store.dispatch(removeExpense({ id: snapshot.key }))
    });

    // child_changed
    database.ref('expenses').on('child_changed', (snapshot) => {
      // console.log(snapshot.key, snapshot.val())
      store.dispatch(editExpense(snapshot.key, snapshot.val() ));
    });

    // child_added
    database.ref('expenses').on('child_added', (snapshot) => {
      store.dispatch(addExpense({
        id: snapshot.key,
        ...snapshot.val()
      }))
    });
  }

  render(){
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
