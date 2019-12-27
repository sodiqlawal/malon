import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Home/Home';
import About from './About/About';
import './App.css';




function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
