import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        {/* <Route path="/createticket" element={<CreateTicket />} />
        <Route path="/ticketdetails" element={<TicketDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );

}

export default App;
