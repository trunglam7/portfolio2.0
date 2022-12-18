import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'

import './App.css'
import Sidenav from "./components/Sidenav";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React, {useState} from "react";
import {IoIosClose} from "react-icons/io";
function App() {

  const [toggleNav, setToggleNav] = useState(false);

  const menuHandler = () => {
    setToggleNav(toggleNav ? false : true);
  }

  return (
    <BrowserRouter>
       <div className="App">
          <div className="content-side">
            <div className="header-section">
              <h1>TRUNG LAM</h1>
              <button className="menu-btn" onClick={menuHandler}>{toggleNav ? <IoIosClose size={50} color="black"/> : <GiHamburgerMenu size={50}/>}</button>
            </div>
            
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/projects'>Projects</Link>
            </nav>
            <div className="line"><div className="pulse"></div></div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
            </Routes> 
            
          </div>
          
          <Sidenav toggleNav={toggleNav}/>
        </div>
    </BrowserRouter>
   
  );
}

export default App;
