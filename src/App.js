import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/reactotron'
import GlobalStyles from './styles/global'
import { Header } from './components/Header'
import { Routes } from './routes'
import store from './store'

export function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}
