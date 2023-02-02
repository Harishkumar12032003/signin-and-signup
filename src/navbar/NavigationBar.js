import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigationbar.css';
import logo from "./logo.svg";
import menu from "./hamburger.svg";
import { useNavigate } from "react-router-dom";

const Navigationbar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  let navigate = useNavigate(); 
  
  const routeChange = () =>{ 
    let path = `auth`; 
    navigate(path);
  }

  const routeChangeSignUp = () =>{ 
    let path = `signup`; 
    navigate(path);
  }


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
           <img src={logo}/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={menu}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About</NavLink>
            </li>
            <li>
                <button type='button' className='buttons' onClick={routeChange}>Sign In</button>
            </li>
            <li>
                <button type="button" className='buttons' onClick={routeChangeSignUp}>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigationbar