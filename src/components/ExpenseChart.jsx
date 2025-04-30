import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFE'];

const ExpenseChart = () => {
  const transactions = useSelector((state) => state.transactions.entries);

  const expenses = transactions.filter(t => t.type === 'expense');
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find(item => item.category === curr.category);
    if (found) {
      found.amount += Number(curr.amount);
    } else {
      acc.push({ category: curr.category, amount: Number(curr.amount) });
    }
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="amount"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ExpenseChart;
