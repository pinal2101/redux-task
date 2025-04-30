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
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || !category || !date) {
      alert('Please fill all fields correctly');
      return;
    }

    // Dispatch action to add transaction
    dispatch(addTransaction({
      id: uuidv4(),
      type,
      amount,
      category,
      description,  // Description is optional, so we can leave it empty if not provided
      date,
    }));

    // Clear form fields after submission
    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  };

  return (
    <div className="add-entry-page">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Transaction Type */}
        <label htmlFor="type">Transaction Type</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="form-input">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select><br />

        {/* Amount Field */}
        <label htmlFor="amount">Amount</label>
        <input 
          id="amount"
          type="number" 
          placeholder="Amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
          className="form-input"
        /><br />

        {/* Category Dropdown */}
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="utilities">Utilities</option>
          <option value="shopping">Shopping</option>
          <option value="salary">Salary</option>
          {/* Add more categories as needed */}
        </select><br />

        {/* Description Field (Optional) */}
        <label htmlFor="description">Description (optional)</label>
        <input 
          id="description"
          type="text" 
          placeholder="Description (optional)" 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          className="form-input"
        /><br />

        {/* Date Field */}
        <label htmlFor="date">Date</label>
        <input 
          id="date"
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)} 
          className="form-input"
        /><br />

        <button type="submit" className="submit-button">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddEntryPage;
