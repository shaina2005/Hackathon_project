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
<<<<<<< HEAD
        <Route path="/create-ticket" element={<CreateTicket/>} />
=======
        {/* <Route path="/createticket" element={<CreateTicket />} />
        <Route path="/ticketdetails" element={<TicketDetails />} /> */}
>>>>>>> 3f6978c420b83dcf2d5d6915b8f10ee3fa52236a
      </Routes>
    </BrowserRouter>
  );

}

export default App;
