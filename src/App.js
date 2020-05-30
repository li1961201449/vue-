import React,{Component} from 'react';
import './App.css';
import {HashRouter, BrowserRouter,Route, Link,Switch} from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/amin'
export default class App extends Component {
 render() {
  return (
    <BrowserRouter>
    <Switch>
    <Route redirect path='/login' component ={Login}></Route>
    <Route path='/' component ={Admin}></Route>
    </Switch>
    </BrowserRouter>
  );
 }
}
