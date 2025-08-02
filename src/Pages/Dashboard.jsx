import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="dashboard-container container mt-5">
      <h2 className="dashboard-title text-center mb-4">Welcome to AskPCTE Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="stat-card">
            <h5>Total Tickets</h5>
            <p className="stat-number">12</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card">
            <h5>Resolved</h5>
            <p className="stat-number">7</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card">
            <h5>Pending</h5>
            <p className="stat-number">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
