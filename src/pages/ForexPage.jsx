

import React from "react";
// import "./ForexPage.css";
import "../style/ForexPage.css";

const ForexPage = () => {

  const data = [
    {
      symbol: "AUDCAD",
      product: "Australian Dollar vs Canadian Dollar",
      standardAvg: "1.3",
      rawMin: "0",
      rawAvg: "0.5",
    },
    {
      symbol: "AUDCHF",
      product: "Australian Dollar vs Swiss Franc",
      standardAvg: "1.6",
      rawMin: "0",
      rawAvg: "0.5",
    },
    {
      symbol: "AUDJPY",
      product: "Australian Dollar vs Japanese Yen",
      standardAvg: "1.6",
      rawMin: "0",
      rawAvg: "0.5",
    },
    {
      symbol: "AUDNZD",
      product: "Australian Dollar vs New Zealand Dollar",
      standardAvg: "1.4",
      rawMin: "0",
      rawAvg: "0.6",
    },
    {
      symbol: "AUDSGD",
      product: "Australian Dollar vs Singapore Dollar",
      standardAvg: "4.1",
      rawMin: "0",
      rawAvg: "2.6",
    },
  ];


  return (
    <div className="forex-container">
      {/* Hero Section */}
      <section className="forex-hero">
        <h1>Forex Trading</h1>
        <p>
          <span>Forex trading, also known as foreign exchange,  currency trading or FX</span><br/>
          <span> is a global market for trading one currency for another one from a</span><br/>
          <span>different country. extrede  offers over 60+ Forex currency pairs.</span><br/>
          <span>Access the world's forex markets and get tight spreads, starting from</span><br/>
          <span>as low as 0.0 pips.</span>
        </p>
      </section>
      <br/><br/>

      {/* Why Trade Forex */}
      <h2 id="forex">Why Trade Forex with Extrede</h2>
      <section className="forex-why-trade">
        
          <div className="text1">The global foreign exchange market is one of the fastest, most liquid and exciting markets. Join thousands of traders who are already trading with extrede   , a multi award-winning global broker, offering over 70 Forex pairs in all the major currencies, 24 hours a day, 5 days a week. All major currency pairs include the US dollar (USD) as either the base or counter currency. Majors include pairs like the GBP/USD, EUR/USD, and USD/JPY.
            <br/><br/>
            extrede    offers you consistently tight spreads, starting from as low as 0.0 pips. We’ve partnered with leading banking and non-banking financial institutions to ensure a deep liquidity pool, so that you get the best available market prices and ultra-low latency order execution.
          </div>

          <div className="text2">
            <h3>What are the benefits of Forex trading?</h3>
            <ul>
              <li><i class="fa-solid fa-check"></i>Trade on spreads from 0.0 pips</li>
              <li><i class="fa-solid fa-check"></i>Leverage options up to 1000:1</li>
              <li><i class="fa-solid fa-check"></i>70+ currency pairs</li>
              <li><i class="fa-solid fa-check"></i>The Forex markets are open 24 hours a day, 5 days a week</li>
              <li><i class="fa-solid fa-check"></i>Award-winning multilingual customer support</li>
              <li><i class="fa-solid fa-check"></i>No price manipulation, no requotes and no dealing desk</li>
              <li><i class="fa-solid fa-check"></i>Benefit from low margin, low-cost trading</li>
              <li><i class="fa-solid fa-check"></i>High speed trade execution from Equinix servers</li>
              
            </ul>
          </div>
      </section>

      {/* 6 Reasons Section */}
      <section className="forex-reasons">
        <h2>6 Reasons to Choose extrede   </h2>
        <h4>A Global Forex Broker</h4>

        <div className="forex-grid">

          <div className="forex-card">
          <span className="icon">⚖️</span>
            <h2>Global Regulated Broker</h2>
            <p>Boost your trading experience with a licensed and fully regulated Global forex broker, with multiple awards to their name.</p>
          </div>

          <div className="forex-card">
          <span className="icon">📱</span>
            <h2>Trading Platforms</h2>
            <p>Give your forex trading an edge with robust, feature-rich and easy-to-use MetaTrader 4, MetaTrader 5 and Iress.</p>
          </div>



          <div className="forex-card">
          <span className="icon">⚡</span>
            <h2>Low Latency Execution</h2>
            <p>Get all the available market prices and tight spreads, with ultra-low latency execution and minimal slippage.
            </p>
          </div>
          <div className="forex-card">
          <span className="icon">📈</span>
            <h2>Forex Trading Leverage</h2>
            <p>Leverage of up to 500:1 in over 50 currency pairs and widen your exposure to the global forex markets</p>
          </div>
        </div>
          
      </section>


      {/* What is Forex Trading */}
      <section className="forex-what-is">
        <h2>What is Forex Trading?</h2>
        <p>Forex trading involves buying one currency and selling another simultaneously. Through careful analysis, traders predict the potential direction of currency prices and attempt to capture gains based on price fluctuations. There is no centralised exchange for forex trading. Rather, it takes place electronically or online, between networks of global computers. The market is open 24 hours a day, 5 days a week.</p>
      </section>
      
      <section className="forex-best-platform">
      <h2>What is the Best Platform to Trade Forex?</h2>
        <div className="content">
          <div className="text-content">
            
            <p>Discover the benefits of Forex trading on one of the most powerful trading platforms available, extrede 5 (extrede 5). Available across desktop and mobile platforms, the MetaTrader 5 platform is ready when you are.</p>
            <ul>
              <li>Spreads from 0.0 pips & leverage up to 500:1</li>
              <li>Customisable interface, including colours of technical indicators</li>
              <li>One-click trading</li>
              <li>MarketWatch</li>
              <li>Live price streaming on Live accounts and Demo accounts 128-bits encryption for secure trading</li>
              <li>Expert Advisors (EAs)</li>
              <li>Customisable alerts</li>
              <li>Compatible with iOS, Android, and Mac devices</li>
            </ul>
          </div>
          <div className="image-container">
            <img src="/images/foreex1.png" alt="Trading Platform" />
          </div>
        </div>
       </section>

      <br/><br/>



       <section id="broker" className="forex-best-platform">
        <h2 id="trade1">Trade Forex with a Global<br/>
            Regulated Forex Broker</h2>
        <div className="content">

        <div className="image-container">
            <img src="/images/forex2.png" alt="Trading Platform" />
          </div>

          <div className="text-content">
            
            <p>Access the forex market with a professional forex trading experience by opening a trading account with Orlan Capital. With advanced charting tools for informed decision-making, fundamental and technical analysis, the support of an experienced team, live streaming of prices and low latency execution.</p>
           
          </div>
          
        </div>
       </section>


        <br/><br/>

      <section id="broker" className="forex-best-platform">
        <h2 id="trade">Forex Trading Example</h2>
        <div className="content">

          <div className="text-content">
            {/* <h2>Forex Trading Example</h2><br/> */}
            <p>Where the underlying asset is the AUD/USD currency pair, also known as the “Aussie.” Let us suppose that the AUD/USD pair is trading at:</p>
          </div>

          <div className="image-container">
            <img src="/images/forex3.png" alt="Trading Platform" />
          </div> 
        </div>
      </section>

          <br/><br/> <br/><br/> <br/><br/>

      <section id="red" className="forex-best-platform">
        
        <div className="content">

          <div className="text-content">
            <p>You decide to buy AUD 20,000 because you think that the AUD/USD price will rise in the future. Your margin rate is 5%. This means that you need to deposit 5% of the total position value into your margin account.</p>
            <br/>
            <div className="image-container">
            <img src="/images/forex4.png" alt="Trading Platform" />
            </div>
          </div>

          <div className="image-container">
            {/* <img src="/images/forex4.png" alt="Trading Platform" /> */}
            <p id="clrblackk">Now, in the next hour, if the price moves to 0.6880/0.6882, you have a winning trade. You could close your position by selling at the current price of AUD 0.6880.</p>
          </div> 
        </div>
      </section>


      <div className="p">
        <p>In this case, the price moved in your favour. But, had the price declined instead, moving against your prediction, you could have made a loss. If that loss was higher than AUD 14.94 AUD, your broker would have issued a margin stop out.</p>
      </div>

      


    <section className="forex-spreads">
      <div className="table-container">
        <h2>Forex Spreads</h2>
        <table className="forex-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Product</th>
              <th colSpan="1">Standard A/c</th>
              <th colSpan="2">Raw ECN A/c</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Avg</th>
              <th>Min</th>
              <th>Avg</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.symbol}</td>
                <td>{row.product}</td>
                <td>{row.standardAvg}</td>
                <td>{row.rawMin}</td>
                <td>{row.rawAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

     

     
    </div>
  );
};

export default ForexPage;