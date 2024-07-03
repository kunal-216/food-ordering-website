import React from 'react'
import './Footer.css'
import logo from './BiteBurst.png'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo' src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, autem ea. Voluptatum autem ullam maxime.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>BiteBurst Pvt Ltd</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+19-817-171-7787</li>
                    <li>contact@BiteBurst.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © BiteBurst.com - All Rights Reserved
        </p>
    </div>
  )
}

export default Footer
