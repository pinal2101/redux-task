import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction, editTransaction } from '../features/transactions/transactionSlice';

const TransactionsPage = () => {
  const transactions = useSelector((state) => state.transactions.entries);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ type: '', amount: '', category: '' });

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  const handleEditClick = (transaction) => {
    setEditId(transaction.id);
    setEditData({
      type: transaction.type,
      amount: transaction.amount,
      category: transaction.category,
    });
  };

  const handleEditSave = (id) => {
    dispatch(editTransaction({ id, updatedTransaction: editData }));
    setEditId(null); // Clear edit mode
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {editId === transaction.id ? (
              <div>
                <input
                  type="text"
                  name="type"
                  value={editData.type}
                  onChange={handleChange}
                  placeholder="Type"
                />
                <input
                  type="number"
                  name="amount"
                  value={editData.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                />
                <input
                  type="text"
                  name="category"
                  value={editData.category}
                  onChange={handleChange}
                  placeholder="Category"
                />
                <button onClick={() => handleEditSave(transaction.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{transaction.type} - {transaction.amount} - {transaction.category}</p>
                <button onClick={() => handleEditClick(transaction)}>Edit</button>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
