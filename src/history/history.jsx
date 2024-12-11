import React from 'react';
import './history.css';

export function History() {
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
            <tr>
              <td><small>YYYY-MM-DD</small></td>
              <td><small>Make & Model</small></td>
              <td><small>Expense Type</small></td>
              <td><small>Amount</small></td>
            </tr>
          </tbody>
        </table>
        {/* Placeholder for WebSocket Service */}
        <div>
          <p>Placeholder for websocket. Realtime updates</p>
        </div>
      </main>
    </div>
  );
}
