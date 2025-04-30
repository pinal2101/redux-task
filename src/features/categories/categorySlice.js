import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: ['Food', 'Travel', 'Utilities', 'Shopping', 'Salary'],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
