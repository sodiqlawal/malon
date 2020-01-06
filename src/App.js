import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import './App.css';




class App extends React.Component {
  constructor() {
    super();
    this.state={
      route: "home"
    }
  }

  changeRoute = param => {
    this.setState({route:param})
  }

  componentDidMount() {
    // $(window).scroll(function() {    

    //   var scroll = $(window).scrollTop();
      
    //   if (scroll > 500) {
    //   $("#links li:first-child").addClass("current");
    //   }
      
    //   if (scroll > 750) {
    //   $("#links li:first-child").removeClass("current");
    //   $("#links li:nth-child(2)").addClass("current");
    //   }
      
    //   var scrollBottom = $(window).scrollTop() + $(window).height();
      
    //   if (scroll < 500) {
    //   $("#links li:first-child").removeClass("current");
    //   }
      
    //   if (scroll < 750) {
    //   $("#links li:nth-child(2)").removeClass("current");
    //   }
      
    //   });
  }

  render() {
    const {route} = this.state
  return (
    // <Router>
    //   {
    //   <Switch>
    //   <Route path="/" exact><Home /></Route>
    //   <Route path="/about"><About /></Route>
    //   </Switch>
    //   }
    // </Router>
    <React.Fragment>
      {
        route === "home" ?
        <Home pathRoute= {this.changeRoute} />:
        <About pathRoute={this.changeRoute} />
      }
    </React.Fragment>
  );
}
}


export default App;
