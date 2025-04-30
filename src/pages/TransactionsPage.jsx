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
