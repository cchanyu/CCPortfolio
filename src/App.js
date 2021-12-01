import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import projectData from "./server/projects.json";
import aboutmeData from "./server/aboutme.json";

import HomeScreen from './components/HomeScreen.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import ContactMe from './components/ContactMe.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

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
      aboutmeData: aboutmeData.aboutme
    }
  }

  render(){
    const { projectData, aboutmeData } = this.state;

    return (
      <div className="App">
        <Navbar className="navbar" />
        <div className="invisNavbar" />

        {/* React Route */}
        <Routes className="route">
          <Route exact path="/" element={<HomeScreen />}/>

          <Route path="about" element={<AboutMe aboutmeData={aboutmeData} />}/>
          
          <Route path="projects" element={<Projects projectData={projectData} />}/>

          <Route path="contact" element={<ContactMe />}/>
        </Routes>

        {/* Navigation */}
        <nav className="nav">
          <Link className="link" to="/">
            <img className="icon" src={HomeIcon} alt="home" />
            <div className="hstext">Home</div>
          </Link>

          <Link className="link" to="/about">
            <img className="icon" src={AboutIcon} alt="about" />
            <div className="hstext">About</div>
          </Link>

          <Link className="link" to="/projects">
            <img className="icon" src={ProjectIcon} alt="project" />
            <div className="hstext">Project</div>
          </Link>

          <Link className="link" to="/contact">
            <img className="icon" src={ContactIcon} alt="contact" />
            <div className="hstext">Contact</div>
          </Link>
        </nav>

        <Footer />
        <div className="invisFooter" />
      </div>
    );
  }
}

export default App;
