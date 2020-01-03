import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import './App.css';




function App() {
  return (
    <Router>
      {
      <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/about"><About /></Route>
      </Switch>
      }
    </Router>
  );
}

export default App;
