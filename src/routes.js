import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Cart } from './pages'

export function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cart' component={Cart} />
    </Switch>
  )
}
