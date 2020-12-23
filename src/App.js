import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LandingPage from './LandingPage.js';
import Header from './Header.js';
import Career from './Career.js';
import Projects from './Projects.js';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
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
        <Route exact path="/projects"
          component={Projects} />
        <Route exact path="/aboutme"
          component={AboutMe} />
        <Route exact path="/contact"
          component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
