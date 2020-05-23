import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import data from "../server/project-content.json";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import "./App.scss";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projectData: data.projects
    }
  }

  render(){
    const { projectData } = this.state;
    console.log(projectData);
    return(
      <div className="app">
        <Router>
          <Navbar />
          <div className="app__content">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <div className="app__container">
                  <Home />
                </div>
              </Route>
              <Route path="/about" component={About} />
              <Route path="/project" component={ProjectList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;