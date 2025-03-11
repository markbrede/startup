import React from 'react';

export function ExpenseList({ expenses }) {
  return (
    <div className="fade-in">
      <h2>Recent Expenses:</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.vehicle} - {expense.expenseType}: ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
