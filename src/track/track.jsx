import React, { useState, useEffect } from 'react';
import './track.css';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseList } from './ExpenseList';
import { ExpenseChart } from './ExpenseChart';

export function Track() {
  //keep user input
  const [vehicle, setVehicle] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState(0);
  //store submitted expenses
  const [expenses, setExpenses] = useState([]);
  const [message, setMessage] = useState('');
  const [quote, setQuote] = useState({ text: '', author: '' });

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

    //fetch the quote
    const fetchQuote = async () => {
      try {
        const response = await fetch('/api/quote');
        if (!response.ok) {
          throw new Error('Failed to fetch the quote');
        }
        const data = await response.json();
        setQuote({ text: data.text, author: data.author || 'Unknown' });
      } catch (error) {
        console.error('Error fetching the quote:', error);
      }
    };

    fetchExpenses();
    fetchQuote();
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

      {/* quote */}
      {quote.text && (
        <div className="quote-box fade-in">
          <p>"{quote.text}"</p>
          <p className="quote-author">— {quote.author}</p>
        </div>
      )}

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