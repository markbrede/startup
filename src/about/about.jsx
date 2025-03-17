import React, { useEffect, useState } from 'react';
import './about.css';

export function About() {
  const [imageUrl, setImageUrl] = useState('business.jpeg');
  const [quote, setQuote] = useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = useState('unknown');

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
    });
    //Like in Simon, I am setting placeholder values. Later on, I will fetch these from an API
    setImageUrl('warren-buffett.jpeg');
    setQuote('Price is what you pay; value is what you get');
    setQuoteAuthor('Warren Buffett');
  }, []);

  return (
    <div className="about-content">
      <div id="picture" className="picture-box fade-in">
        <img src={imageUrl} alt="Picture of crazy confident business-men." />
      </div>

      <div className="quote-section fade-in">
        <p className="quote">&ldquo;{quote}&rdquo;</p> {/*google suggested "&ldquo" to add quotation marks*/}
        <p className="author"><strong>Author:</strong> {quoteAuthor}</p>
      </div>


      <h2 className="fade-in">What Makes us Different?</h2>
      <p className="fade-in">
        AutoExpenseTracker allows you to categorize any expense. With your entries, AutoExpenseTracker will calculate your cost per mile and allow you to compare your cost with other users' vehicles.
        Additionally, you will be able to see the vehicle's total cost as well as the cost per category (fuel, insurance, operating cost, and features).
        Constructed by Mark Brede, this application aims to give users a detailed breakdown of their vehicle's real cost.
      </p>

      <h2 className="fade-in">Time for a New Vehicle?</h2>
      <p className="fade-in">   
        Is it more expensive to maintain your older vehicle or purchase a new one? Can you really save money by going electric? 
        These are questions that can only be answered with the hard facts; your current cost per mile. 
        AutoExpenseTracker will allow you to confidently make that decision.
      </p>
    </div>
  );
}
