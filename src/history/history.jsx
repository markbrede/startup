import React from 'react';
import './history.css';

export function History({ expenses }) {
  return (
    <div className="history-container">
      <main>
        <h1 className="track-title">Your Expense History</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle</th>
              <th>Expense Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
                <td>{expense.vehicle}</td>
                <td>{expense.expenseType}</td>
                <td>${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
