

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteTransaction, editTransaction } from '../features/transactions/transactionSlice';

// const TransactionsPage = () => {
//   const transactions = useSelector((state) => state.transactions.entries);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteTransaction(id));
//   };

//   const handleEdit = (id, updatedData) => {
//     dispatch(editTransaction({ id, updatedData }));
//   };

//   return (
//     <div>
//       <h2>Transactions</h2>
//       {transactions.map((transaction) => (
//         <div key={transaction.id}>
//           <p>{transaction.type}: {transaction.amount} | Category: {transaction.category}</p>
//           <button onClick={() => handleDelete(transaction.id)}>Delete</button>
//           {/* Add edit functionality */}
//           <button onClick={() => handleEdit(transaction.id, { amount: 1000 })}>Edit</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TransactionsPage;


import { useSelector } from 'react-redux';

const TransactionsPage = () => {
  // Use useSelector to select the entries from the store
  const entries = useSelector((state) => state.transactions?.entries || []);

  // Ensure you're checking if entries is an array
  if (!Array.isArray(entries)) {
    return <div>No transactions available</div>;
  }

  return (
    <div>
      <h1>Transactions</h1>
      {/* Render the transactions */}
      {entries.map((entry) => (
        <div key={entry.id}>{entry.name}</div>
      ))}
    </div>
  );
};

export default TransactionsPage;
