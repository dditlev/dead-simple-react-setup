import './style/master.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import App from './components/App.react'
import Frontpage from './components/Frontpage.react'

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Frontpage
      }
    ]
  }
]

ReactDOM.render((
    <Router.Router>
      {Router.renderRoutes(routes)}
    </Router.Router>
  ), document.getElementById('app'))