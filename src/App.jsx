import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
// import CreateTicket from './Pages/CreateTicket';
// import TicketDetails from './Pages/TicketDetails';
import './App.css';

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
