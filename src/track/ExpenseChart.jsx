import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export function ExpenseChart({ expenses }) {
  const labels = expenses.map((expense) => expense.date);
  const data = expenses.map((expense) => expense.amount);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Expenses Over Time',
        data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}
