import React, { useEffect, useState } from 'react';
import './history.css';

export function History() {
  const [expenses, setExpenses] = useState([]); //local storage

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });

    //simply loads expenses from local storage
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  return (
    <div className="history-content">
      <h1 className="track-title fade-in">Your Expense History</h1>
      <table className="fade-in">
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
              <td><small>{expense.date}</small></td>
              <td><small>{expense.vehicle}</small></td>
              <td><small>{expense.expenseType}</small></td>
              <td><small>${expense.amount}</small></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="fade-in">
        <p>Websocket for real time expenses catagorized as gas/fuel/petrol. Will be implemeted for next phase</p>
      </div>
    </div>
  );
}
