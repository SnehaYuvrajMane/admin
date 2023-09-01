
import './Login.css'
import React,{useState} from 'react'
import {auth} from '../Firebase';

import {  signInWithEmailAndPassword } from "firebase/auth";


import { useNavigate } from "react-router";



const Login = () => {
  const [username,SetUsername]=useState('');
  const [password,SetPassword]=useState('');
  const navigate = useNavigate();

  const login=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {

    // Signed in 
    const user = userCredential.user;
    navigate('/Dashboard')
    
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  })
  }



     

  return (
    <div className='login'>

   
        <div className='login-detail'>
            <form onSubmit={login}>
            <div className='title'>
            <h1> Sign In</h1>
          
           
        </div>
            <label className='label'>Email :</label>
          <input type="email" placeholder="Enter your email" value={username} onChange={(event)=>{SetUsername(event.target.value)}}/>
            <label className='label'>Password :</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(event)=>{SetPassword(event.target.value)}}/>
            <button className='btn'>
                Login
            </button>
            <p>Don't Have an Account? <span>Sign Up</span></p>
            </form>
        </div>
       
        
    </div>
  )
}

export default Login
