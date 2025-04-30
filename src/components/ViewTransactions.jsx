// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTransaction, editTransaction } from '../features/transactions/transactionSlice';

// const ViewTransactions = () => {
//   const [filter, setFilter] = useState('all'); // Filter for income or expense
//   const [editingTransaction, setEditingTransaction] = useState(null);
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const dispatch = useDispatch();

//   const transactions = useSelector((state) => state.transactions); // Assuming transactions are stored in redux

//   // Filter transactions based on type (income/expense)
//   const filteredTransactions = transactions.filter((transaction) => {
//     if (filter === 'all') return true;
//     return transaction.type === filter;
//   });

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     if (!amount || !category || !date) {
//       alert('Please fill all fields correctly');
//       return;
//     }

//     // Dispatch action to update transaction
//     dispatch(editTransaction({
//       id: editingTransaction.id,
//       amount,
//       category,
//       description,
//       date,
//     }));

//     // Reset form after update
//     setEditingTransaction(null);
//     setAmount('');
//     setCategory('');
//     setDescription('');
//     setDate('');
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteTransaction(id));
//   };

//   const handleEdit = (transaction) => {
//     setEditingTransaction(transaction);
//     setAmount(transaction.amount);
//     setCategory(transaction.category);
//     setDescription(transaction.description || '');
//     setDate(transaction.date);
//   };

//   return (
//     <div>
//       <h2>View Transactions</h2>

//       {/* Filter Buttons */}
//       <div style={{ marginBottom: '20px' }}>
//         <button onClick={() => setFilter('income')}>Show Income</button>
//         <button onClick={() => setFilter('expense')}>Show Expense</button>
//         <button onClick={() => setFilter('all')}>Show All</button>
//       </div>

//       {/* Display Filtered Transactions */}
//       <div>
//         {filteredTransactions.length === 0 ? (
//           <p>No transactions found for the selected filter.</p>
//         ) : (
//           <ul>
//             {filteredTransactions.map((transaction) => (
//               <li key={transaction.id}>
//                 {transaction.type.toUpperCase()} - {transaction.amount} ({transaction.category}) - {transaction.date}
//                 <button onClick={() => handleEdit(transaction)}>Edit</button>
//                 <button onClick={() => handleDelete(transaction.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Update Transaction Form */}
//       {editingTransaction && (
//         <div style={{ marginTop: '20px' }}>
//           <h3>Edit Transaction</h3>
//           <form onSubmit={handleUpdate}>
//             <input
//               type="number"
//               placeholder="Amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//            <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-input">
//               <option value="food">Food</option>
//               <option value="travel">Travel</option>
//               <option value="utilities">Utilities</option>
//               <option value="shopping">Shopping</option>
//               <option value="salary">Salary</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <button type="submit">Update</button>
//             <button type="button" onClick={() => setEditingTransaction(null)}>Cancel</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewTransactions;




// src/components/ViewTransactions.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTransactionsQuery, useAddTransactionMutation, useEditTransactionMutation, useDeleteTransactionMutation } from '../services/apiService'; // Import hooks

const ViewTransactions = () => {
  const [filter, setFilter] = useState('all'); // Filter for income or expense
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  // Use RTK Query hooks to fetch and modify transactions
  const { data: transactions = [], isLoading } = useGetTransactionsQuery(); // Fetch transactions
  const [addTransaction] = useAddTransactionMutation();
  const [editTransaction] = useEditTransactionMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();

  // Filter transactions based on type (income/expense)
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert('Please fill all fields correctly');
      return;
    }

    // Dispatch action to update transaction
    await editTransaction({
      id: editingTransaction.id,
      editedTransaction: {
        amount,
        category,
        description,
        date,
      },
    });

    // Reset form after update
    setEditingTransaction(null);
    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setAmount(transaction.amount);
    setCategory(transaction.category);
    setDescription(transaction.description || '');
    setDate(transaction.date);
  };

  if (isLoading) return <p>Loading...</p>; // Loading state

  return (
    <div>
      <h2>View Transactions</h2>

      {/* Filter Buttons */}
      <div>
        <button onClick={() => setFilter('income')}>Show Income</button>
        <button onClick={() => setFilter('expense')}>Show Expense</button>
        <button onClick={() => setFilter('all')}>Show All</button>
      </div>

      {/* Display Filtered Transactions */}
      <div>
        {filteredTransactions.length === 0 ? (
          <p>No transactions found for the selected filter.</p>
        ) : (
          <ul>
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.type.toUpperCase()} - {transaction.amount} ({transaction.category}) - {transaction.date}
                <button onClick={() => handleEdit(transaction)}>Edit</button>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Edit Transaction Form */}
      {editingTransaction && (
        <div>
          <h3>Edit Transaction</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
              <option value="travel">Travel</option>
               <option value="utilities">Utilities</option>
               <option value="shopping">Shopping</option>
              <option value="salary">Salary</option>
            </select>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button type="submit">Edit</button>
            <button type="button" onClick={() => setEditingTransaction(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewTransactions;
