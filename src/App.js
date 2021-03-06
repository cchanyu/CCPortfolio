import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import data from "./server/project-content.json";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';
import "./App.scss";
import ProjectHeader from "./components/ProjectList/ProjectHeader";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projectData: data.projects
    }
  }

  render(){
    const { projectData } = this.state;
    return(
      <div className="app">
        <Router>
          <Navbar />
          <div className="app__content">
            <Switch>
              <Route exact path="/">
                <div className="app__container">
                  <Home />
                </div>
              </Route>
              <Route path="/about">
                <div className="app__container">
                  <About />
                </div>
              </Route>
              <Route path="/project">
                <div className="app__container">
                  <React.Fragment>
                    <ProjectHeader />
                    <ProjectList
                      projectData={projectData}
                    />
                  </React.Fragment>
                </div>
              </Route>
              <Route path="/contact">
                <div className="app__container">
                  <Contact />
                </div>
              </Route>
              <Route path="/CCPortfolio">
                <div className="app__container">
                  <Home />
                </div>
              </Route>
            </Switch>
            <Sidebar />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;