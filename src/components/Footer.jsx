import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function loadQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const quotes = await response.json();
      setQuotes(quotes);
      const select = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(select);
    }

    loadQuotes();
  }, []);

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faGratipay}
              onClick={random}
              className="pointer-cursor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
