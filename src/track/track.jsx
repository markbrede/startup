import React, { useState } from 'react';
import './track.css';

export function Track({ onAddExpense }) {
  const [vehicle, setVehicle] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ vehicle, expenseType, amount, date: new Date().toISOString().split('T')[0] });
    setVehicle('');
    setExpenseType('');
    setAmount('');
  };

  return (
    <main>
      <h1 className="track-title">Track Your Expenses</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="vehicle">Vehicle:</label>
        <input
          type="text"
          id="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          placeholder="Make and Model"
          required
        />
        <br />
        <label htmlFor="expenseType">Expense Type:</label>
        <input
          type="text"
          id="expenseType"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          placeholder="e.g., Fuel, Insurance"
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </main>
  );
}
