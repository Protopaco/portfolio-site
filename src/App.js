import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LandingPage from './LandingPage.js';
import Header from './Header.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"
          component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
