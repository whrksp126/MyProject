import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import Search from './pages/Search';

import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

import UserRoute from './components/UserRoute';
import {useDispatch} from 'react-redux';
import {auth} from './firebase'
import {setUser} from './redux/actions'

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer positon="top-center" />
        <Switch>
          <UserRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add" component={AddEdit} />
          <Route path="/update/:id" component={AddEdit} />
          <Route path="/view/:id" component={View} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
