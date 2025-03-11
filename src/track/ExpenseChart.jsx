import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export function ExpenseChart({ expenses }) {
  //get dates from expenses for chart dates
  const labels = expenses.map((expense) => expense.date);
  //the cost amounts for the chart data
  const data = expenses.map((expense) => expense.amount);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Your Past Expenses Over Time',
        data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
{/*line chart using the data */}
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}
