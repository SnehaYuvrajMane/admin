import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from '../Firebase';
import { useNavigate } from "react-router";

import './Dashboard.css'


const Dashboard = () => {
  const[navbar,setNavbar]=useState(false);
  const navigate=useNavigate();
  const [email,SetEmail]=useState('');
  const[User,setUser]=useState('');

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        SetEmail(user.email)
        setUser(user)
        // ...
      } else {
        // User is signed out
      navigate('/Login')
        // ...
      }
      
  })

  },[])


  return (
    <div className='main'>
     
    <div className='left-content'>
    <Sidebar navbar={navbar} setNavbar={setNavbar} user={User}/>
    </div>
    <div className='right-content'>
       {email}

      
</div>
</div>
  )
}

export default Dashboard
