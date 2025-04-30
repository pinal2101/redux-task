import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/transactions/transactionSlice';
import { v4 as uuidv4 } from 'uuid';
import './AddEntryPage.css';

const AddEntryPage = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('income');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || !category || !startDate || !endDate) {
      alert('Please fill all fields correctly');
      return;
    }

    dispatch(addTransaction({
      id: uuidv4(),
      type,
      amount,
      category,
      description,
      startDate,
      endDate,
    }));

    // Clear form
    setAmount('');
    setCategory('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="add-entry-page">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="type">Transaction Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-input"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="utilities">Utilities</option>
          <option value="shopping">Shopping</option>
          <option value="salary">Salary</option>
          <option value="bills">Bills</option>
          <option value="healthcare">HealthCare</option>
          <option value="investment">Investment</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <label htmlFor="description">Description (optional)</label>
        <input
          id="description"
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-input"
        />

        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-input"
        />

        <button type="submit" className="submit-button">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddEntryPage;
