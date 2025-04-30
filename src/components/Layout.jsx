
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'; 

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <h2> Budget Tracker</h2>
        <ul className="nav-links">
          <li><Link to="/add-entry">Add Entry</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/chart">Expense Chart</Link></li>
        </ul>
      </nav>

      {/* Page content rendered here */}
      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
