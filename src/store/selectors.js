
import { createSelector } from 'reselect';

// Selector to get all transactions
export const selectTransactions = (state) => state.transactions.entries;

// Selector to get total income
export const selectTotalIncome = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  }
);

// Selector to get total expense
export const selectTotalExpense = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  }
);

// Selector to get total salary (if applicable)
export const selectTotalSalary = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions
      .filter((transaction) => transaction.category === 'Salary')
      .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
  }
);
