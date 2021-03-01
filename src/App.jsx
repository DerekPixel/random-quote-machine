import './App.css';
import React, { useState } from 'react';
import Buttons from './Components/Buttons';
import TextAndAuthor from './Components/TextAndAuthor';


function App() {

  var [quote, setQuote] = useState('Quote API is Broken :(');
  var [author, setAuthor] = useState('');

  const NewQuoteAndAuthor = () => {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://type.fit/api/quotes', true);
    req.send();
    req.onload = () => {

      const json = JSON.parse(req.response);

      const randoNumber = Math.floor(Math.random() * json.length);
      
      setQuote(quote = json[randoNumber].text);
      setAuthor(author = json[randoNumber].author);
    }
  }

  window.onload= () => {
    NewQuoteAndAuthor();
  }

  return (
    <div id='quote-box'>
      <TextAndAuthor text={quote} author={author} />
      <Buttons onClick={NewQuoteAndAuthor} />
      
    </div>
  );
}

export default App;
