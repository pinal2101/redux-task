import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import HomePage from './pages/HomePage';
import AddEntryPage from './components/AddEntryPage';
import TransactionsForm from './components/TransactionsForm';
import DashboardPage from './pages/DashboardPage';
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <Router>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />  {/* Use 'element' instead of 'component' */}
        <Route path="/add-entry" element={<AddEntryPage />} />
        <Route path="/transactions" element={<TransactionsForm />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
