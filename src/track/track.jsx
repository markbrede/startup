import React, { useState, useEffect } from 'react';
import './track.css';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseList } from './ExpenseList';
import { ExpenseChart } from './ExpenseChart';
import { notifyExpense } from '../ExpenseNotifier';

export function Track({ userName }) {
  //keep user input
  const [vehicle, setVehicle] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState(0);
  //store submitted expenses
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });

    //fetch expenses from the api
    const fetchExpenses = async () => {
      try {
        const response = await fetch('/api/expenses');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.msg || 'Failed to fetch expenses');
        }
        
        setExpenses(data);
      } catch (error) {
        setMessage(error.message);
      }
    };    

    fetchExpenses();
  }, []);

  //handle submission for the data the users enter
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    try {
      //create new expense with api
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vehicle, expenseType, amount })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.msg || 'Failed to add the expense');
      }
      
      const newExpense = await response.json();
      setExpenses([...expenses, newExpense]);

      //send websocket notification
      notifyExpense(newExpense, userName, 'add'); //username is null for now
      
      //clear
      setVehicle('');
      setExpenseType('');
      setAmount(0);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="track-content">
      <h1 className="track-title fade-in">Track Your Expenses</h1>

      {/* user inputs handled through expense form */}
      <ExpenseForm
        onSubmit={handleSubmit}
        vehicle={vehicle}
        setVehicle={setVehicle}
        expenseType={expenseType}
        setExpenseType={setExpenseType}
        amount={amount}
        setAmount={setAmount}
      />

      {message && <p className="error-message">{message}</p>}

      {/* list of recent expenses */}
      <ExpenseList expenses={expenses} />

      {/* expense chart */}
      <div className="fade-in">
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
}
