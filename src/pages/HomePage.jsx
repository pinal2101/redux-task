import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Personal Budget Tracker</h1>
      <ul>
        <li><Link to="/add-entry">Add Entry</Link></li>
        <li><Link to="/transactions">View Transactions</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/chart">Expense Chart</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
