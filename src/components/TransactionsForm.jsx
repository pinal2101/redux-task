
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction, editTransaction } from '../features/transactions/transactionSlice';

import './TransactionForm.css'; 

const TransactionsForm = () => {
  const transactions = useSelector((state) => state.transactions.entries);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    type: '',
    amount: '',
    category: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  const [filterType, setFilterType] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const handleEditClick = (transaction) => {
    setEditId(transaction.id);
    setEditData({ ...transaction });
  };

  const handleEditSave = (id) => {
    dispatch(editTransaction({ id, updatedTransaction: editData }));
    setEditId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTransactions = transactions.filter((t) => {
    return (
      (!filterType || t.type === filterType) &&
      (!filterCategory || t.category === filterCategory)
    );
  });

  return (
    <div className="transactions-page">
      <h2>Transactions</h2>

      {/* Filters */}
      <div className="filters">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
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
      </div>

      {/* Transactions Table */}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount (₹)</th>
            <th>Category</th>
            <th>Description</th>
            <th>SatrtDate</th>
            <th>EndDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              {editId === transaction.id ? (
                <>
                  <td>
                    <select name="type" value={editData.type} onChange={handleChange}>
                      <option value="income">Income</option>
                      <option value="expense">Expense</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="amount"
                      value={editData.amount}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select name="category" value={editData.category} onChange={handleChange}>
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
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      value={editData.description}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
  <input
    type="date"
    name="startDate"
    value={editData.startDate || ''}
    onChange={handleChange}
  />
</td>
<td>
  <input
    type="date"
    name="endDate"
    value={editData.endDate || ''}
    onChange={handleChange}
  />
</td>

                  <td>
                    <button onClick={() => handleEditSave(transaction.id)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{transaction.type}</td>
                  <td>₹{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.description || '-'}</td>
                  <td>{transaction.startDate}</td>
                  <td>{transaction.endDate}</td>

                  <td>
                    <button onClick={() => handleEditClick(transaction)}>Edit</button>
                    <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsForm;
