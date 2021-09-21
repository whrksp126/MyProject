import React from 'react'
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from '../routers/Auth'
import Home from '../routers/Home'

export default function AppRouter({isLoggedIn}) {
  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home/>
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  )
}

