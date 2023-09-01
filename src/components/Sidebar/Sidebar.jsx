

import React, { useState } from "react";
import "./Sidebar.css";





function Sidebar({navbar,setNavbar,user}) {


    


    return (
      <div id="sidebar">
        <h1 id="sidebar-logo">Admin Panel</h1>
        <br />
        <p id="sidebar-text">Let's Create Own Website</p>
        {user.email}
  
        <ul>
  
    
    
      
          <li className="sidebar-li" onClick={()=>setNavbar(!navbar)}>


         Navbar
     
          </li>
         
        </ul>

        {/* <button onClick={()=>setNavbar(!navbar)}> NAVBAR</button>   */}
        

      </div>
    );
  }
  export default Sidebar;
  