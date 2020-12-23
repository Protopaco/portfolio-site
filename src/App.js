import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LandingPage from './LandingPage.js';
import Header from './Header.js';
import Career from './Career.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"
          component={LandingPage} />
        <Route exact path="/career"
          component={Career} />
      </Switch>
    </Router>
  );
}

export default App;
