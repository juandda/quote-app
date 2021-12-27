import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import Title from './components/Title';
import quotes from './quotes.json';

function App() {

  const colors = ["#316B83", 
                  "#6D8299", 
                  "#8CA1A5", 
                  "#D5BFBF", 
                  "#716F81", 
                  "#B97A95", 
                  "#F6AE99", 
                  "#BAABDA"]

  const[quote, setQuote] = useState(quotes[getRandom(quotes.length)]);
  const[background, setBackground] = useState(colors[getRandom(colors.length)])

  const handleQuote = () =>{
    const index = getRandom(quotes.length);
    setQuote(quotes[index])
    setBackground(colors[getRandom(colors.length)])
  }

  return (
    <div className="App" style={{background}}>
      <Title/>
      <QuoteBox
        quote={quote.quote}
        author={quote.author}
        handleQuote={handleQuote}
        background={background}     
      />
    </div>
  );
}

const getRandom = (max) => Math.floor(Math.random() * max);

export default App;
