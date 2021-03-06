import './App.css';
import React, { useState } from 'react';
import Buttons from './Components/Buttons';
import TextAndAuthor from './Components/TextAndAuthor';


function App() {

  var [quote, setQuote] = useState('Quote API is Broken :(');
  var [author, setAuthor] = useState('');

  const NewQuoteAndAuthor = () => {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://goquotes-api.herokuapp.com/api/v1/random?count=500', true);
    req.setRequestHeader('Accept', 'application/json');
    req.send();
    req.onload = () => {

      const json = JSON.parse(req.response);

      const randoNumber = Math.floor(Math.random() * json.quotes.length);
      
      setQuote(quote = json.quotes[randoNumber].text);
      setAuthor(author = json.quotes[randoNumber].author);
    }
  }

  window.onload= () => {
    NewQuoteAndAuthor();
  }

  return (
    <div>
      <div id='quote-box'>
        <h1>Random Quote Machine</h1>
        <TextAndAuthor text={quote} author={author} />
        <Buttons onClick={NewQuoteAndAuthor} />
      </div>
      <div className="bottom-text">
        <p>Made by Derek Price</p>
          <a href="https://github.com/DerekPixel/random-quote-machine" className="github-link">
            <span className="iconify" data-icon="akar-icons:github-fill" data-inline="false"></span>
            GitHub Repo
          </a>
      </div>
    </div>
  );
}

export default App;
