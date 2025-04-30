
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalIncome, selectTotalExpense, selectTotalSalary } from '../store/selectors'; // Ensure the correct path

const TotalPage = () => {
  const totalIncome = useSelector(selectTotalIncome);
  const totalExpense = useSelector(selectTotalExpense);
  const totalSalary = useSelector(selectTotalSalary);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Total Income and Expense Breakdown</h1>
      <p>Total Salary: ₹{totalSalary.toFixed(2)}</p> 
      <p>Total Income: ₹{totalIncome.toFixed(2)}</p> 
      <p>Total Expense: ₹{totalExpense.toFixed(2)}</p> 

     
    </div>
  );
};

export default TotalPage;
