


// import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState: {
//     entries: [],
//   },
//   reducers: {
//     addTransaction: (state, action) => {
//       state.entries.push({ id: uuidv4(), ...action.payload });
//     },
//     editTransaction: (state, action) => {
//       const { id, updatedTransaction } = action.payload;
//       const index = state.entries.findIndex((transaction) => transaction.id === id);
//       if (index !== -1) {
//         state.entries[index] = { ...state.entries[index], ...updatedTransaction };
//       }
//     }
    
//     deleteTransaction: (state, action) => {
//       state.entries = state.entries.filter(t => t.id !== action.payload);
//     },
//   },
// });

// export const { addTransaction, editTransaction, deleteTransaction } = transactionSlice.actions;
// export default transactionSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    entries: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.entries.push({ id: uuidv4(), ...action.payload });
    },
    editTransaction: (state, action) => {
      const { id, updatedTransaction } = action.payload;
      const index = state.entries.findIndex((transaction) => transaction.id === id);
      if (index !== -1) {
        state.entries[index] = { ...state.entries[index], ...updatedTransaction };
      }
    }, // <<< you missed this comma here
    deleteTransaction: (state, action) => {
      state.entries = state.entries.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTransaction, editTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;

