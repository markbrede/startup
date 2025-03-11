import React from 'react';

export function ExpenseForm({ onSubmit, vehicle, setVehicle, expenseType, setExpenseType, amount, setAmount }) {
  return (
    <form className="fade-in" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="vehicle">Vehicle:</label>
        <input
          type="text"
          id="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          placeholder="Make and Model"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="expenseType">Expense Type:</label>
        <input
          type="text"
          id="expenseType"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          placeholder="e.g., Fuel, Insurance"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.valueAsNumber)}
          placeholder="Enter amount"
          required
        />
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}
