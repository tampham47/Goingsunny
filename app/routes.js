import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from './store'

import App from 'containers/App'
import Home from 'containers/Home'
import Main from 'containers/Main'
import Guide from 'containers/Guide'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="main" component={Main} />
        <Route path="how-it-works" component={Guide} />
      </Route>
    </Router>
  )
}
