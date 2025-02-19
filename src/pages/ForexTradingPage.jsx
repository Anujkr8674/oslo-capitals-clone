import React from "react";
import "../style/ForexTradingPage.css"; // Importing the CSS file

const ForexTradingPage = () => {
  return (
    <div className="beg-container">
      {/* Header Section */}
      <header className="beg-header">
        <h1>Forex Trading for Beginners</h1>
        <p>By John Doe - February 15, 2023</p>
      </header>

      {/* Hero Image Section */}
      <section className="beg-hero">
        <div className="beg-image-placeholder">Hero Image Here</div>
      </section>

      {/* Video Section */}
      <section className="beg-video">
        <div className="beg-video-placeholder">Video Placeholder</div>
      </section>

      {/* Introduction Section */}
      <section className="beg-intro">
        <h2>What is Forex? And Why Trade It?</h2>
        <p>
          Forex, or the foreign exchange market, is the global marketplace for buying and selling
          currencies. It is one of the largest and most liquid financial markets in the world.
        </p>
      </section>

      {/* Why So Few People Know About It? */}
      <section className="beg-why">
        <h2>So, if forex is so big, why have so few people heard of it?</h2>
        <p>
          The forex market operates differently than the stock market, and many people are simply not
          aware of its opportunities.
        </p>
      </section>

      {/* World Map Image Placeholder */}
      <section className="beg-world-map">
        <div className="beg-image-placeholder">World Map Image Here</div>
      </section>

      {/* Why Trade Forex? */}
      <section className="beg-why-trade">
        <h2>Why Trade Forex?</h2>
        <p>
          Forex trading offers many benefits, including high liquidity, 24-hour trading opportunities,
          and leverage to enhance trading potential.
        </p>
      </section>

      {/* Currency Trading Section */}
      <section className="beg-currency-trading">
        <h2>Reading a Quote and Making a Trade</h2>
        <p>
          Understanding forex quotes is crucial in forex trading. You can buy and sell currencies in
          pairs, such as EUR/USD.
        </p>
        <div className="beg-image-placeholder">Currency Quote Image Here</div>
      </section>

      {/* Leverage and Pip Explanation */}
      <section className="beg-leverage-pip">
        <h2>Pips, Profit, Leverage, and Loss</h2>
        <p>A "pip" is the smallest price move in forex trading.</p>
        <div className="beg-image-placeholder">Pip Explanation Image Here</div>
      </section>

      {/* Strategy Development Section */}
      <section className="beg-strategy">
        <h2>How to Develop a Strategy</h2>
        <p>
          A good forex strategy is crucial for long-term success. Traders must analyze market trends
          and risk factors.
        </p>
      </section>

      {/* Knowledgeable Trader Section */}
      <section className="beg-knowledgeable">
        <h2>Becoming a Knowledgeable Forex Trader</h2>
        <p>Learning, practicing, and adapting strategies help traders become successful in forex.</p>
      </section>

      {/* Currency Prediction Section */}
      <section className="beg-prediction">
        <h2>How do you know which currencies will rise and which will fall?</h2>
        <p>By analyzing economic data, geopolitical events, and market trends, traders make predictions.</p>
      </section>

      {/* Footer Section */}
      <footer className="beg-footer">
        <p>© 2023 Forex Trading Guide. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
export default ForexTradingPage;