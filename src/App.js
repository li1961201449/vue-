import React,{Component} from 'react';
import './App.css';
import {HashRouter, BrowserRouter,Route, Link,Switch,Router} from 'react-router-dom';
import history from './pages/history';
import Login from './pages/login/login'
import Admin from './pages/admin/amin'
export default class App extends Component {
 render() {
  return (
    <Router history={history} >
    <Switch>
    <Route path='/' component ={Login}></Route>
    <Route path='/admin' component ={Admin}></Route>
    </Switch>
    </Router>
  );
 }
}
