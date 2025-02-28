import React, { useEffect } from 'react';
import './track.css';

export function Track() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="track-content">
      <h1 className="track-title fade-in">Track Your Expenses</h1>

      <div className="fade-in">
        <p>Placeholder for database content like stored vehicle data for selecting a make and model</p>
      </div>

      <form className="fade-in" method="post" action="history.html">
        <div className="form-group">
          <label htmlFor="vehicle">Vehicle:</label>
          <input type="text" id="vehicle" placeholder="Make and Model" required />
        </div>

        <div className="form-group">
          <label htmlFor="expenseType">Expense Type:</label>
          <input type="text" id="expenseType" placeholder="e.g., Fuel, Insurance" required />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" placeholder="Enter amount" required />
        </div>

        <button type="submit">Add Expense</button>
      </form>

      <div className="fade-in">
        <p>Placeholder for data visual (probably something like chart.js for expense charts)</p>
      </div>
    </div>
  );
}
