import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

import useDarkMode from './useDarkMode';
import { NavLink } from 'react-router-dom';



function Navbar() {
const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className='navbar' id='navbar'>
      <div className="top_nav">
        <span className='announcement'>Something to announce</span>
        <ul className='nav_social'>
          <li><a target="_blank" href=""><FaWhatsapp /></a></li>
          <li><a target="_blank" href=""><CiFacebook /></a></li>
        </ul>
      </div>

      <div className='bottom_nav' id='bottom_nav'>
        <span className="logo">
          <img src={`/assets/images/logo.png`} alt="" />
        </span>
        <nav className='main_nav'>
          <ul className='main_nav_list'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/food-gallery">Standard</NavLink></li>
            
          </ul>
          <div className="nav_right">
          <span><NavLink to="/cart"><span className='cart_sect'><span className='cart_count'>100</span><IoCartOutline /></span></NavLink></span>
          <span onClick={toggleDarkMode} className='dark_light'>{isDarkMode ? <span id="sun_icon"><CiSun /></span> : <span id="moon_icon"><IoMoonOutline /></span>}</span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;