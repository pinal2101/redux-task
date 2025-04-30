import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'All',
  startDate: null,
  endDate: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    setDateRangeFilter: (state, action) => {
      const { startDate, endDate } = action.payload;
      state.startDate = startDate;
      state.endDate = endDate;
    },
    clearFilters: (state) => {
      state.category = 'All';
      state.startDate = null;
      state.endDate = null;
    },
  },
});

export const { setCategoryFilter, setDateRangeFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
