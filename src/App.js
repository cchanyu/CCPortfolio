import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div className="app__container">
              
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;