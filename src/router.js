import React, { Component } from 'react';

import {BrowserRouter,HashRouter, Router, Route, Switch ,hashHistory } from 'react-router-dom';
import history from './pages/history';
import Login from './pages/login/login'
import Admin from './pages/admin/amin';
class MRoute extends Component {
  render() {
    return (
    //   <Router>
    //     <Switch>
    //      <Route path='/' component ={Login}></Route>
    // <Route path='/admin' component ={Admin}></Route>
    //     </Switch>
    //   </Router>
      <BrowserRouter  history={history}>
    <Switch>
    <Route  path='/' component ={Login}></Route>
    <Route  path='/admin' component ={Admin}></Route>
    </Switch>
    </BrowserRouter>
    );
  }
}

export default MRoute;