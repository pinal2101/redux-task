
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AddEntryPage from './components/AddEntryPage';
import TransactionsForm from './components/TransactionsForm';
import DashboardPage from './pages/DashboardPage';
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="add-entry" element={<AddEntryPage />} />
          <Route path="transactions" element={<TransactionsForm />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="chart" element={<ChartPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
