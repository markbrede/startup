import React from 'react';
import './about.css';

export function About() {
  return (
    <div className="about-container">
      <main>
        <div id="picture" className="picture-box">
          <img src="business.jpeg" alt="Picture of confident business professionals." />
        </div>

        <h2>A Little About Us</h2>
        <p>
          By 150,000 miles, the additional cost of owning and maintaining a vehicle typically equals the vehicle's price when new. This is due to consistent expenses like fuel, insurance, and maintenance. By 250,000 miles, these costs can triple the original purchase price. Auto Expense Tracker helps you manage your vehicle expenses effectively. Keep track of your fuel, insurance, and maintenance costs to understand your vehicle's total cost of ownership.
        </p>

        <h2>What Makes Us Different?</h2>
        <p>
          AutoExpenseTracker allows you to categorize any expense. With your entries, AutoExpenseTracker will calculate your cost per mile and allow you to compare your cost with other users' vehicles. Additionally, you will be able to see the vehicle's total cost as well as the cost per category (fuel, insurance, operating cost, and features). Constructed by Mark Brede, this application aims to give users a detailed breakdown of their vehicle's real cost.
        </p>

        <h2>Time for a New Vehicle?</h2>
        <p>
          Is it more expensive to maintain your older vehicle or purchase a new one? Can you really save money by going electric? These are questions that can only be answered with the hard facts: your current cost per mile. AutoExpenseTracker will allow you to confidently make that decision.
        </p>

        {/* Placeholder for Mapping Service */}
        <div>
          <p>
            <strong>Placeholder for possible mapping services if I decide it is relevant</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
