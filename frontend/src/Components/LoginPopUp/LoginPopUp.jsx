import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import './LoginPopUp.css'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopUp = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Sign Up");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newurl = url;
    if(currState === "Login"){
      newurl += "/api/user/login"
    }
    else{
      newurl += "/api/user/register"
    }

    const response = await axios.post(newurl,data)

    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  } 


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required/>}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required/>
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currState==="Login"?
        <p onClick={()=>setCurrState("Sign Up")}>Create a new Account? <span>Click Here</span></p>
        : <p onClick={()=>setCurrState("Login")}>Already have an Account? <span>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUp
