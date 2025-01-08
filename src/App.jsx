import React, { useState } from 'react';
import './App.css';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';

function App() {
  const [rating, setRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  }

  const handleClick = (e) => {
    console.log(e.target.textContent)
    setRating(Number.parseInt(e.target.textContent));
  }

  return (
    <>
    <div className="card">
      {isSubmitted ?
        <ThankYou rating={rating} /> :
        <Rating rating={rating} handleClick={handleClick} handleSubmit={handleSubmit} />
      }
    </div>
      <div className="attribution">
        Challenge by Frontend Mentor. Coded by Shantanu Pimprikar
    </div>
    </>
    
  );
}

export default App;
