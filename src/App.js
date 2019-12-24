import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Home/Home';
import About from './About/About';
import './App.css';




function App() {
  return (
    // <div>
    //   {/* <Home /> */}
    //   <About />
    // </div>
    <React.Fragment>
    <Router>
      <div>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      </Switch>
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
