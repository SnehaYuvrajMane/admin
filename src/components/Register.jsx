import React, { useState } from 'react'
import { useNavigate } from "react-router";
import './Register.css'
import {auth} from '../Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

    
    const navigate = useNavigate();
   const[username,SetUsername]=useState('');
   const[password,SetPassword]=useState('');
   const register=(e)=>{
    e.preventDefault();
    console.log(username,password);
    createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("User Registered Successfully")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    })}

  return (
    <div className='register'>

   
        <div className='register-detail'>
            <form onSubmit={register}>
            <div className='title'>
            <h1> SignUp</h1>
          
           
        </div>
        
            <label className='label'>Email :</label>
          <input type="email" placeholder="Enter your email" value={username} onChange={(event)=>{SetUsername(event.target.value)}}/>
            <label className='label'>Password :</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(event)=>{SetPassword(event.target.value)}} />
            <button className='btn'>
              Signup
            </button>
            <p>Do you  Have an Account? <span>Sign In</span></p>
            </form>
        </div>
       
        
    </div>
  )
}

export default Register
