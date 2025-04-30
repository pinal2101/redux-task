import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transactions/transactionSlice';
import categoryReducer from '../features/categories/categorySlice';
import filterReducer from '../features/filters/filterSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    categories: categoryReducer,
    filters: filterReducer,
  },
});
