import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import routes from './routes'
import { flattenRoutes } from './utils'

const Routers = () => {
  const routesMap = flattenRoutes(routes)
  console.log('routesMap...', routesMap)
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/home' />
        {routesMap.map(e =>
          <Route
            exact
            key={e.path}
            path={e.path}
            component={e.Component}
          />)}
      </Switch>
    </Router>
  )
}

export default Routers
