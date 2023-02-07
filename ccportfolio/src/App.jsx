import React, { Component } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import projectData from "./server/projects.json";
import aboutmeData from "./server/aboutme.json";

import Home from './components/Home.jsx';
import About from './components/About.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import Topbar from './components/Topbar.js';
import Footer from './components/Footer.js';
import Login from "./components/Login";

import HomeIcon from './icon/home-solid.svg';
import AboutIcon from './icon/id-card-solid.svg';
import ProjectIcon from './icon/list-alt-solid.svg';
import ContactIcon from './icon/edit-solid.svg';
import './App.css'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      projectData: projectData.projects,
      aboutmeData: aboutmeData.aboutme,
      isLogged: false
    }
    this.checkLogged = this.checkLogged.bind(this);
  }

  checkLogged() {
    <>
      { this.isLogged ? 
      this.setState({ isLogged: false }) : 
      this.setState({ isLogged: true })}
    </>
  }

  render(){
    const { projectData, aboutmeData, isLogged } = this.state;
    const { checkLogged } = this;

    return (
      <div className="App">
        <Topbar className="top" isLogged={isLogged} />
        <div className="top-invis" />

        {/* React Route */}
        <Routes className="route">
          <Route exact path="/CCPortfolio" element={<Home />}/>

          <Route path="/" element={<Home />}/>

          <Route path="about" element={<About aboutmeData={aboutmeData} />}/>
          
          <Route path="project" element={<Project projectData={projectData} />}/>

          <Route path="contact" element={isLogged ? <Contact /> : <Login isLogged={isLogged} checkLogged={checkLogged} />}/>
        </Routes>

        {/* Navigation */}
        <nav className="nav">
          <NavLink className="nav-link" exact to="/CCPortfolio" activeClassName="active">
            <img className="nav-icon icon" src={HomeIcon} alt="home" />
            <div className="nav-text">Home</div>
          </NavLink>

          <NavLink className="nav-link" to="/about" activeClassName="active">
            <img className="nav-icon icon" src={AboutIcon} alt="about" />
            <div className="nav-text">About</div>
          </NavLink>

          <NavLink className="nav-link" to="/project" activeClassName="active">
            <img className="nav-icon icon" src={ProjectIcon} alt="project" />
            <div className="nav-text">Project</div>
          </NavLink>

          <NavLink className="nav-link" to="/contact" activeClassName="active">
            <img className="nav-icon icon" src={ContactIcon} alt="contact" />
            <div className="nav-text">Contact</div>
          </NavLink>
        </nav>

        <Footer />
        <div className="footer-invis" />
      </div>
    );
  }
}

export default App;
