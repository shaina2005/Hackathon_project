import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import CreateTicket from './Pages/createticket';


import Dashboard from './Pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createticket" element={<CreateTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
