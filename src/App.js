import React from 'react'
import Login from './components/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Register from './components/Register'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path='/Login' element={<Login/>}/>
         
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
