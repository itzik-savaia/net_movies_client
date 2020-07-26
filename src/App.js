import React from 'react';
import './scss/app.scss';
import HomeApp from './layouts/home/homeApp';
import LoginApp from './layouts/login/loginApp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/login"></Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login"><LoginApp /></Route>
            <Route path="/"><HomeApp /></Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}
