import React from "react";
import '../styles/quotes.styles.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight, faQuoteLeft} from "@fortawesome/free-solid-svg-icons"

const QuoteBox = ({quote, author, handleQuote, background}) => {
    return(
        <div className="quote-container">
            <span style={{color: `${background}`}}><FontAwesomeIcon icon={faQuoteLeft}/></span>
            <h3 style={{color: `${background}`}}>{quote}</h3>
            <h4 style={{color: `${background}`}}>{author}</h4>
            <button onClick={handleQuote} style={{color: `${background}`}}><FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
        </div>
    )
}

export default QuoteBox;