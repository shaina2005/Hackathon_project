import { useState } from 'react'
import Login from './Pages/Login'
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import CreateTicket from './Pages/Createticket';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
      </Routes>
    </BrowserRouter>


    
  )
}

export default App
