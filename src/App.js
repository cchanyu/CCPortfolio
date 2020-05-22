import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Router>
          <Navbar />
          <div className="app__content">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <div className="app__container">
                
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;