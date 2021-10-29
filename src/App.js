import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './pages/Layout'
import NoFound from './pages/NoFound'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/layout" component={Layout}></Route>
            <Route path="/404" component={NoFound}></Route>
            <Redirect exact from="/" to="/layout"></Redirect>
            <Redirect from="*" to="/404"></Redirect>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
