import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Import the state management tools
import {user} from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import {setUsername, setEmail, setToken, setEntry} from './actionsType/newUser'
import {Provider, connect} from 'react-redux'
import './index.css'

let store = configureStore({
  reducer: user
})
console.log(store.getState())

let unSuscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch(setUsername('xpan'))

const mapStateToProps = state => {
  return {
    user: state
  }
}

const mapActionToProps = dispatch => {
  return {
    setUsername: function(username){
      dispatch(setUsername(username))
    },
    setEmail: function(email){
      dispatch(setEmail(email))
    },
    setEntry: function(entry){
      dispatch(setEntry(entry))
    },
    setToken: function(token){
      dispatch(setToken(token))
    }
  }
}

unSuscribe()

const Container= connect(mapStateToProps, mapActionToProps)(App)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </React.StrictMode>
)
