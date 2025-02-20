import React from "react";
import "../style/ShareCfd.css";

const ShareCfd = () => {

  const data = [
    { exchange: "ASX", equities: 2829 },
    { exchange: "AXW", equities: 102 },
    { exchange: "NASDAQ", equities: 1380 },
    { exchange: "NYSE", equities: 1524 },
    { exchange: "ARC", equities: 198 },
    { exchange: "LSE", equities: 972 },
    { exchange: "HKE", equities: 1418 },
    { exchange: "SGX", equities: 438 },
    { exchange: "IDK", equities: 23 },
  ];



  return (
    <div className="cfd-container">
      <header className="cfd-header">
        <h1>Forex Trading</h1>
        <p id="cfd">
             Forex trading, also known as Foreign Exchange, currency trading or FX<br/>
            is a global market for trading one currency for another one from a<br/>
            different country. Extrede offers over 60+ Forex currency pairs.<br/>
            Access the world's forex markets and get tight spreads, starting from<br/>
            as low as 0.0 pips.
        </p>
      </header>
      
     


      <section className="forex-best-platform">
      <h2 >Why Trade Share CFDs with Extrede ?</h2>
        <div className="content">
            <div className="image-container">
                <img src="/images/cfd1.png" alt="Trading Platform" />
            </div>
          <div className="text-content">
            
            <p >
            Extrede   offers among the best trading environments for CFD trading in more than 10,000 Australian and international share CFDs alongside stock CFDs and indices across 4 continents.</p>
            <br/><br/>
            <p  >You can trade stock CFDs on the world’s most famous companies as well as share CFDs across global markets and benefit from price movements in any direction.</p><br/>
            <p>At Extrede  , you can trade both Stock CFDs and share CFDs on two powerful platforms from the same trading account, on desktop and mobile (Apple iOS & Android). The stock CFDs come from a range of global markets including London, Hong Kong, Paris, Frankfurt, Madrid, Amsterdam and New York (NYSE & Nasdaq) and cover a wide range of sectors including pharmaceuticals, aviation, tourism and Big Tech. Extrede   is once again leading the way with an advanced group of stock CFDs which will give traders illimitable and outstanding opportunities in the universal markets.</p>
          </div>
          
        </div>
       </section>


        <div className="share-dma">
          <div className="dma-share">
            <img src="/images/cfdlogo.png" alt="cfdlogo"/>
            <h1>1. Direct Market Access (DMA) Share and Stock CFDs</h1>
            <p>Offered through our powerful Iress CFD trading Platform.</p>
            <br/>
            <p>On a stock exchange, trade prices and the pending volume at each price point are publicly available in what’s known as the “order book”. The ability to access the exchange order book is something unique to the Direct Market Access (DMA) pricing model and provides traders with transparent and precise execution. In additional to genuine market data, the DMA pricing model ensures you can go long on all securities on the exchange and the widest available list of shorts giving you a myriad of trading opportunities.</p>
            <br/>
            <h1>What Iress DMA Share CFDs Can You Trade?</h1>
            {/* <p>DMA Share CFD Count Per Exchange</p> */}
          </div>



          <div className="dma-container">
      <h2 className="dma-title">DMA Share CFD Count Per Exchange</h2>
      <table className="dma-table">
        <thead>
          <tr>
            <th className="dma-header">EXCHANGE</th>
            <th className="dma-header">EQUITIES</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "dma-row light" : "dma-row dark"}>
              <td className="dma-cell">{row.exchange}</td>
              <td className="dma-cell">{row.equities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>

       <div id="comm" className="commodities">
      <h2 id="Commodities">Equities Trading</h2>
      
      <section id="Commodities-Markets" className="commodities-why-trade">
        
          <div className="commodities-text1">
            <p>Extrede   offers exposure to international equity markets with genuine market data, low commissions and competitive margins. See your trades using real market data and trade transparently using CFDs across 4 different continents and over 10,000 stocks. Command higher position sizes by choosing between leveraged trading accounts with competitive financing rates. With the ability to go long and short, you could potentially profit on the price movements of companies from around the globe.</p>
          </div>

          <div className="commodities-text2">
            <p>In Australia, the stock market has pre-open and pre-close phases where buying and selling orders are allowed to overlap. A computer algorithm then matches these orders and determines the opening and closing price where the most amount of stocks trade through. Extrede   provides access to both these market phases and all the associated extra liquidity.</p>
          </div>
      </section>
      </div>

    <br/><br/><br/><br/><br/><br/>




      <section  id="good11" className="forex-best-platform">
      <h2 id="good">Trade Share CFDs on Our extered  Platform</h2>
        <div className="content">
          <div id="good" className="text-content">
            
            <p  id="good">Extered are the world’s most popular Forex trading platforms. Primarily known for Forex & Commodities trading, a range of Share CFDs are also available to trade. Extrede   offers access to Share CFDs on 4 international exchanges and there are multiple account options to choose from. Go long or short on some of the most popular stocks from across the globe with leverage options up to 500:1. If you are looking for a more comprehensive Share trading experience, our Iress platform offers over 10,000 DMA Sxhare CFDs to trade across 9 international exchanges.</p>
          
          </div>
          <div className="image-container">
            <img src="/images/foreex1.png" alt="Trading Platform" />
          </div>
        </div>
       </section>

      <br/><br/>


      
    <h2 id="soft">What Share CFDs Can You Trade<br/>
                on MT4 & MT5?<br/>
            Share CFD Count Per Exchange</h2>
        <div className="image-container1">
            <img src="/images/cfd2.png" alt="Trading Platform" />
        </div> 



           {/* 6 Reasons Section */}
      <section className="forex-reasons">
        <h2>6 Reasons to Trade Share CFDs with extrede   </h2>
        <h4>An Australian-regulated forex & CFD broker</h4>

        <div id="grid1" className="forex-grid">

        <div id="card" className="forex-card">
          <span className="icon">⚖️</span>
            <h2>Global Regulated Broker</h2>
            <p>Boost your trading experience with a licensed and fully regulated Global forex broker, with multiple awards to their name.</p>
          </div>

          <div  id="card" className="forex-card">
          <span className="icon">📱</span>
            <h2>Trading Platforms</h2>
            <p>Give your forex trading an edge with robust, feature-rich and easy-to-use MetaTrader 4, MetaTrader 5 and Iress.</p>
          </div>



          <div  id="card" className="forex-card">
          <span className="icon">⚡</span>
            <h2>Low Latency Execution</h2>
            <p>Get all the available market prices and tight spreads, with ultra-low latency execution and minimal slippage.
            </p>
          </div>
          <div id="card" className="forex-card">
          <span className="icon">📈</span>
            <h2>Forex Trading Leverage</h2>
            <p>Leverage of up to 500:1 in over 50 currency pairs and widen your exposure to the global forex markets</p>
          </div>

          <div  id="card"className="forex-card">
          <span className="icon">⚖️</span>
            <h2>Global Regulated Broker</h2>
            <p>Boost your trading experience with a licensed and fully regulated Global forex broker, with multiple awards to their name.</p>
          </div>

          <div  id="card" className="forex-card">
          <span className="icon">📱</span>
            <h2>Trading Platforms</h2>
            <p>Give your forex trading an edge with robust, feature-rich and easy-to-use MetaTrader 4, MetaTrader 5 and Iress.</p>
          </div>



          
          </div>
          
      </section>
      
    </div>
  );
};

export default ShareCfd;
