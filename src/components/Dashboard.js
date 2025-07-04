import React from 'react';
import './Dashboard.css'; 

export default function Dashboard() {
  return (
    <div className="dashboard-grid">
      <div className="header">Header</div>
      <div className="sidebar">Sidebar</div>
      <div className="main">
        <div className="card-grid">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
            <div className="card">Card 4</div>
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
