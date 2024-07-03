import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import logo from '../Navbar/BiteBurst.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
