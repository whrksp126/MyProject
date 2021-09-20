import React, {useState} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from '../routers/Auth'
import Home from '../routers/Home'

export default function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
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
    </Router>
  )
}

