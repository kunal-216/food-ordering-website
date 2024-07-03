import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Navbar/BiteBurst.png'
import search_icon from '../../assets/search_icon.png';
import basket_icon from '../../assets/basket_icon.png';
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState('menu')
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const navigate = useNavigate()

    const logout = () => {
      localStorage.removeItem("token")
      setToken("")
      navigate("/")
    }

  return (
    <div className='navbar'>
      <Link to='/'>< img src={logo} alt="Logo" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=> setMenu("home")} className={menu==="home"? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("menu")} className={menu==="menu"? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={()=> setMenu("contact-us")} className={menu==="contact-us"? "active" : ""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={search_icon} />
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={basket_icon} /></Link>
          <div className={getTotalCartAmount()===0 ? "":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} />
          <ul className='nav-profile-dropdown'>
            <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} />Orders</li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} /><p>Logout</p></li>
          </ul>
        </div>
        }
      </div>
    </div>
  );
}

export default Navbar;
