import React from "react";
import "../style/WhiteLabelPage.css";

const WhiteLabelPage = () => {
  return (
    <div className="white-container">

      <div className="white-header">
        <h2>White Label Forex Trading Solutions</h2>
      </div>



      <section className="funding-secure">
        <h2>Solid Partnerships with Best-in-Class<br/>
        Implementation tailored to your business</h2>
        <p>
        Our White Label solution has been custom-developed by our in-house team to target financial institutions and individuals looking to penetrate or increase their online retail trading businesses. Our team of experts will assist you right from the beginning up until you reach your desired business goals.
       </p>
      </section>



      <section className="comm-best-platform">
      {/* <h2>What is Commodities Trading?</h2> */}
        <div id="intro" className="content1">
        <div  className="image-container">
                <img src="/images/white1.png" alt="Trading Platform" />
                {/* <img  id="intiimg" src="/images/intro1.png" alt="Trading Platform" /> */}
            </div>
            
          <div className="text-content1">
           
                <h1 id="introh"> Reasons to White Label</h1>
                <p>We designed our white label solutions for all the needs of setting up and running your new brokerage firm as quickly and as effortlessly as possible.</p>
                <p>If your business has specific needs, we are flexible enough to accommodate them and provide finely-customised and personalised solutions.</p>

         </div>
       
          
        </div>
       </section>



       <section className="funding-secure">
        <h2>More Reasons to White Label</h2>
         <p>Investors receive everything necessary to setup and run their brokerage business thus minimising the costs and expediting the lengthy process required when opening a brokerage firm from scratch.</p>
         <p>White labeling with the right broker can facilitate expansion and growth that can take a properly managed business to new levels and heights. It could be the ideal partnership program for entrepreneurs and wealthy investors looking to penetrate the retail trading market.</p>
      </section>




      <section className="white-hero">
        <div className="white-text-img">
          <div className="whit-text">
          <h1>Why Choose the Extrede White Label Solution</h1>
            <p>
            Benefit from a robust and highly competitive trading environment based on deep institutional liquidity that will allow you to provide your clients with spreads and swaps starting at 0.0 pips and up to 1:1000 leverage on over 200 tradable CFD instruments from 6 asset classes.
            </p>
          </div>
          <div className="white-img">
          <img src="/images/white2.png" alt="Trading Platform" />
          </div>
        </div>
        
        <div className="white-tags">
          <span>80+ Forex pairs</span>
          <span>15+ Spot Equity Indices</span>
          <span>3 Spot Energy Commodities</span>
          <span>Spot Silver, Gold, Platinum and Palladium</span>
          <span>140+ renowned international shares</span>
          <span>25+ Futures on Energy, Indices, Commodities and Base Metals</span>
        </div>
      </section>

      <section className="white-features">
        <div className="white-feature">
          <h3>✔ Trading Account Types</h3>
          <p>
            The variety of accounts that you will be able to offer can meet the
            needs of almost any type of trader making your total offering
            accessible to the majority of retail and professional traders.
          </p>
        </div>

        <div className="white-feature">
          <h3>✔ Trading Platforms</h3>
          <p>
            You can offer market access and order execution from advanced
            trading platforms like MetaTrader4, MT4 WebTrader, and MetaTrader 5
            with VPS hosting options.
          </p>
        </div>

        <div className="white-feature">
          <h3>✔ Multiple Accounts</h3>
          <p>
            If you want to service portfolio and multi-account managers, then
            you can provide them access to our Personal Multi Account Manager
            (PMAM) platform.
          </p>
        </div>

        <div className="white-feature">
          <h3>✔ Customer Service</h3>
          <p>
            You and your clients will receive 24/5 multilingual support from
            professional customer care agents trained to handle technical
            issues and provide answers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelPage;
