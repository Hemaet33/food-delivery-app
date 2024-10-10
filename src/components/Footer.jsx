import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer_top">
        <div className="footer_top_address">
        <div className="logo">
          <img src={`/assets/images/logo.png`} alt="" />
        </div>
        <div className="address">
          <p>Your company address will be here with proper description in a wide extent.</p>
        </div>
        </div>
        <div className="footer_common">
          <h2>Overview</h2>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Standard</a></li>
            <li><a href="">Diet</a></li>
            <li><a href="">Non-diet</a></li>
          </ul>
        </div>
        <div className="footer_common">
          <h2>Legality</h2>
          <ul>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Refund and Cancellation</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer_common">
          <h2>Follow Us</h2>
          <ul className='social'>
            <li><a href=""><FaWhatsapp /></a></li>
            <li><a href=""><CiFacebook /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer_mid_image">
        <img src={`/assets/images/pay_with.webp`} alt="" />
      </div>
      <div className="footer_bottom">
        <p>&copy; 2024 - Copyright Shihab Restaurant</p>
      </div>
    </div>
  )
}

export default Footer