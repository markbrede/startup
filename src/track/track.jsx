import React from 'react';
import '../app.css'; // Adjust if app.css is located elsewhere
import './track.css';

export function Track() {
  return (
    <main>
      <h1 className="track-title">Track Your Expenses</h1>

      {/* Placeholder for database */}
      <div>
        <p>
          Placeholder for database content like stored vehicle data for
          selecting a make and model
        </p>
      </div>

      <form method="post" action="/history">
        <label htmlFor="vehicle">Vehicle:</label>
        <input
          type="text"
          id="vehicle"
          placeholder="Make and Model"
          required
        />
        <br />
        <label htmlFor="expenseType">Expense Type:</label>
        <input
          type="text"
          id="expenseType"
          placeholder="e.g., Fuel, Insurance"
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          required
        />
        <br />
        <button type="submit">Add Expense</button>
      </form>

      {/* Placeholder for Data Visualization Service */}
      <div>
        <p>
          Placeholder for data visual (probably something like Chart.js for
          expense charts)
        </p>
      </div>
    </main>
  );
}
