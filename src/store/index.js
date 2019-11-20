import { createStore, combineReducers } from 'redux'

import cart from './cart/reducer'

const enhancer = process.env.NODE_ENV === 'development'
  ? console.tron.createEnhancer()
  : null

const reducers = combineReducers({
  cart
})

export default createStore(reducers, enhancer)
