import React, { useState, useEffect } from 'react';
import './track.css';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseList } from './ExpenseList';
import { ExpenseChart } from './ExpenseChart';

/**
 *for the track page I wanted to make it reactive to submitting expenses, list off recent expenses, 
 and make a visual chart for expenses over time.
 */
export function Track() {
  //keep user input
  const [vehicle, setVehicle] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState(0);
  //store submitted expenses
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    //fade in for all the classes fade ni
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });

    //make use of local storage for now
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  //hadle sub for the data the users enter
  const handleSubmit = (e) => {
    e.preventDefault();
    //newly created expense object
    const newExpense = {
      vehicle,
      expenseType,
      amount,
      date: new Date().toLocaleDateString(),
    };
    //update and save to loc stor
    setExpenses([...expenses, newExpense]);
    localStorage.setItem('expenses', JSON.stringify([...expenses, newExpense]));
    
    setVehicle('');
    setExpenseType('');
    setAmount(0);
  };

  return (
    <div className="track-content">
      <h1 className="track-title fade-in">Track Your Expenses</h1>

      {/* Guidance on how to test*/}
      <div className="fade-in">
        <p>Hi TAs! To test my ExpenseList, Chart Visual, and the ExpenseForm files, please enter a vehicle's make and model, choose an expense type, and enter the dollar amount of the expense.</p>
      </div>

      {/*user inputs are now handeled through the the ExpenseForm.jsx I made*/}
      <ExpenseForm
        onSubmit={handleSubmit}
        vehicle={vehicle}
        setVehicle={setVehicle}
        expenseType={expenseType}
        setExpenseType={setExpenseType}
        amount={amount}
        setAmount={setAmount}
      />

      {/*I made ExpenseList for the track so that users can see a list of recent expenses */}
      <ExpenseList expenses={expenses} />

      {/*ExpenseChart isn't totally necessary but, I wanted to learn how I could maek something to 
      visualize the expenses*/}
      <div className="fade-in">
        <ExpenseChart expenses={expenses} />
      </div>
    </div>
  );
}
