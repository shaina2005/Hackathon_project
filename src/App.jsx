import { useState } from 'react'
import Login from './Pages/Login'
import Navbar from './Components/Navbar';

import Dashboard from './Pages/Dashboard'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
