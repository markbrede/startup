import React, { useEffect } from 'react';
import './history.css';

export function History() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
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
          <tr>
            <td><small>YYYY-MM-DD</small></td>
            <td><small>Make & Model</small></td>
            <td><small>Expense Type</small></td>
            <td><small>Amount</small></td>
          </tr>                
        </tbody>
      </table>
      <div className="fade-in">
        <p>Placeholder for websocket. Realtime updates</p>
      </div>
    </div>
  );
}
