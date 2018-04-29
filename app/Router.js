import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default {
  Router: BrowserRouter,
  renderRoutes: (routes) => (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} exact={route.exact} strict={route.strict} render={(props) => (
          <route.component {...props} route={route}/>
        )}/>
      ))}
    </Switch>
  )
}