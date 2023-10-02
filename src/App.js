import { useState } from "react";
import image from './image.jpg';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");
  const [quoteDate, setQuoteDate] = useState("");
  const [quoteSource, setQuoteSource] = useState("");
  const [showQuote, setShowQuote] = useState(false);

  function getRandomQuote() {
    fetch('https://www.tronalddump.io/random/quote')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setShowQuote(true);
        setQuote(data.value);
        let localDate = new Date(data.appeared_at);
        setQuoteDate(localDate.toDateString());
        setQuoteSource(data._embedded.source[0].url);
      });
  }

  return (
    <div className="container">
      <h1>The Dump</h1>
      <img src={image} alt=""></img><br /><br />
      <button className="button" onClick={getRandomQuote}>Get a Random Quote</button>
      {showQuote && <div>
        <h2>{`"${quote}"`}</h2>
        <h3>{`- ${quoteDate}`}</h3>
        <h4><a href={quoteSource}>Source</a></h4>
      </div>}
    </div>
  );
}

export default App;
