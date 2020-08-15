import React from 'react';
import './App.scss';
import HomeApp from './layouts/home/homeApp';
import LoginApp from './layouts/login/loginApp';
import SingupApp from './layouts/singup/singupApp';
import ForgotApp from './layouts/forgot_password/forgot_pass.App';
import AlertDialog from './layouts/home/components/dialog'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <Link to="/login"></Link>
            <Link to="/singup"></Link>
            <Link to="/forgot"></Link>
            <Link to="/"></Link>
          </nav> */}

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
