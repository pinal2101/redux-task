import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

const Dashboard = () => {
  const transactions = useSelector((state) => state.transactions.entries);

  const incomeTransactions = transactions.filter((t) => t.type === 'income');
  const expenseTransactions = transactions.filter((t) => t.type === 'expense');

  const totalIncome = incomeTransactions.reduce((sum, curr) => sum + Number(curr.amount), 0);
  const totalExpenses = expenseTransactions.reduce((sum, curr) => sum + Number(curr.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="transaction-section">
        <div className="income-section">
          <h3>Incomes</h3>
          <ul>
            {incomeTransactions.map((income, index) => (
              <li key={index}>
                {income.description} - ₹{Number(income.amount).toLocaleString()}
              </li>
            ))}
          </ul>
          <h4>Total Income: ₹{totalIncome.toLocaleString()}</h4>
        </div>

        <div className="expense-section">
          <h3>Expenses</h3>
          <ul>
            {expenseTransactions.map((expense, index) => (
              <li key={index}>
                {expense.description} - ₹{Number(expense.amount).toLocaleString()}
              </li>
            ))}
          </ul>
          <h4>Total Expenses: ₹{totalExpenses.toLocaleString()}</h4>
        </div>
      </div>

      <div className="balance-section">
        <h3>Current Balance: ₹{balance.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
