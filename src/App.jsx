import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CreateTicket from './Pages/createticket';

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

        <Route path="/create-ticket" element={<CreateTicket/>} />
        <Route path="/ticket-details" element={<TicketDetails />} />
        <Route path="/createticket" element={<CreateTicket />} />
        <Route path="/ticketdetails" element={<TicketDetails />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
