import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Workers', value: 1200 },
  { name: 'Resources', value: 800 },
  { name: 'Others', value: 500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ExpensePieChart = () => {
  const totalExpense = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div style={{ textAlign: 'center', width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: $${value}`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: '10px', fontSize: '16px' }}>
        <strong>Total Expenditure: ${totalExpense}</strong>
      </div>
    </div>
  );
};

export default ExpensePieChart;
