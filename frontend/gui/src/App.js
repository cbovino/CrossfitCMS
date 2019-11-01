import React, {Component} from 'react';
import {Switch, Route, HashRouter as Router} from "react-router-dom";
import PrivateRoute from './components/common/PrivateRoute';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
import Schedule from './components/schedule/Schedule';
import Bar from './components/common/nav';
import store from "./store";
import { LoadUser } from './actions/auth'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

/* when the  component mounts, the current user is loaded. On first mount, it should set auth to null. */
  
  render(){
  return(
    <div>
      <Router>
        <Bar />
        <Switch>
          <Route path = '/Login' component = {Login}/>
          <Route path = '/Register' component = {Register}/>
          <PrivateRoute path="/" component = {Schedule}/>
        </Switch>
      </Router>
    </div>
  )
  }
}

export default App;
