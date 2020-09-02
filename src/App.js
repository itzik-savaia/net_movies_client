import React from 'react';
import './App.scss';
import HomeApp from './layouts/home/HomeApp';
import LoginApp from './layouts/login/LoginApp';
import SingupApp from './layouts/singup/SingupApp';
import ForgotApp from './layouts/forgot_password/Forgot_Pass.App';
import AlertDialog from './layouts/home/components/dialog/Dialog';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/login"><LoginApp /></Route>
            <Route path="/singup"><SingupApp /></Route>
            <Route path="/forgot"><ForgotApp /></Route>
            <Route exact path="/"><HomeApp /></Route>
            <Route component={AlertDialog} />
          </Switch>
        </div>
      </Router>
    </div >
  );
}
