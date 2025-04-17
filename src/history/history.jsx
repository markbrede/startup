import React, { useEffect, useState } from 'react';
import './history.css';
import { notifyExpense } from '../ExpenseNotifier';

export function History({ userName }) {
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });

    //expenses from api
    const fetchExpenses = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/expenses');
        
        if (!response.ok) {
          throw new Error('Failed to fetch expenses');
        }
        
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        setMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  //expense deletion
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this expense?')) {
      return;
    }

    try {
      //find the expense to be deleted for the notification
      const expenseToDelete = expenses.find(expense => expense.id === id);

      const response = await fetch(`/api/expenses/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('failde to delete expense');
      }

      //deleted expense web soc notification
      if (expenseToDelete) {
        notifyExpense(expenseToDelete, userName, 'delete');
      }

      //if the successful, update
      setExpenses(expenses.filter(expense => expense.id !== id));
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="history-content">
      <h1 className="track-title fade-in">Your Expense History</h1>

      {loading ? (
        <p className="fade-in">Loading expenses...</p>
      ) : expenses.length > 0 ? (
        <table className="fade-in">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vehicle</th>
              <th>Expense Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td><small>{expense.date}</small></td>
                <td><small>{expense.vehicle}</small></td>
                <td><small>{expense.expenseType}</small></td>
                <td><small>${expense.amount}</small></td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(expense.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="fade-in">No expenses found. Start tracking your expenses!</p>
      )}

      {message && <p className="error-message fade-in">{message}</p>}
    </div>
  );
}
