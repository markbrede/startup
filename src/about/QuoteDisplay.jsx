import React, { useEffect, useState } from 'react';

export function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
        const width = containerEl?.offsetWidth || 800;
        const height = containerEl?.offsetHeight || 400;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch(console.error);

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="quote-box">
      <div id="picture">
        <img src={imageUrl} alt="random" />
      </div>
      <div className="quote">
        <p>{quote}</p>
        <p className="author">{quoteAuthor}</p>
      </div>
    </div>
  );
}
