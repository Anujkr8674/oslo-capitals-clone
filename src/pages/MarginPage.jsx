import React from "react";
import "../style/MarginPage.css";

const MarginPage = () => {
  return (
    <div className="margin-container">
      <header className="margin-header">
        <h1 className="margin-title">Swap Rates</h1>
        <p className="margin-subtitle">
          Oslo Capitals understands that competitive swap rates are important to any trader.
        </p>
      </header>
      <ul className="top-nav" id="ul">
        <li>
          <i className="fa-solid fa-address-book"></i> &nbsp; &nbsp;2+ Million traders
        </li>
        <li>
          <i className="fa-solid fa-building-columns"></i>&nbsp; &nbsp;Multiple regulatory licenses
        </li>
        <li>
          <i className="fa-brands fa-rocketchat"></i>&nbsp; &nbsp;24/7 Customer support
        </li>
        <li>
          <i className="fa-solid fa-address-book"></i>&nbsp; &nbsp;Client’s funds protection
        </li>
      </ul>
      <hr/>

        <br/><br/><br/>
      
      <section className="margin-intro">
        <h2>Flexible Leverage from 1:1 up to 1000:1</h2>
        <p>At Oslo Capitals, clients have the flexibility to trade using the same margin requirements and leverage from 1:1 to 1000:1.</p>
        <br/>
        <p>Oslo Capitals’s margin requirements and leverage are based on the total equity in your account(s) as described below:</p>
     
      
      <table className="margin-table">
        <thead>
          <tr>
            <th>Leverage</th>
            <th>Total Equity</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1:1 to 1000:1</td><td>$5 – $40,000</td></tr>
          <tr><td>1:1 to 500:1</td><td>$40,001 – $80,000</td></tr>
          <tr><td>1:1 to 200:1</td><td>$80,001 – $200,000</td></tr>
          <tr><td>1:1 to 100:1</td><td>$200,001 +</td></tr>
        </tbody>
      </table>
      </section>
      
      <section className="margin-about">
        <h2>About Margin</h2>
        <p>Margin is the amount of collateral to cover any credit risks arising during your trading operations.<br/>

            <br/>Margin is expressed as the percentage of position size (e.g. 5% or 1%), and the only real reason for having funds in your trading account is to ensure sufficient margin. On a 1% margin, for instance, a position of $1,000,000 will require a deposit of $10,000.<br/>

            <br/>For Forex, Gold and Silver, new positions can be opened if the margin requirement for the new positions is equal or less than the free margin of the account. When hedging, positions can be opened even when the margin level is below 100% because the margin requirement for hedged positions is Zero.<br/>

            <br/>For all other instruments, new positions can be opened if the margin requirement for the new positions is equal or less than the free margin of the account. When hedging, margin requirement for the hedged position is equal to 50%. New hedged positions can be opened if the final margin requirements will be equal or less than the total equity of the account.</p>
        </section>
      
      <section className="margin-dynamic">
        <h2>Dynamic Margin for Cryptocurrencies</h2>
        <p>At Oslo Capitals, leverage on Cryptocurrency CFDs is dynamic and adapts automatically based on the volume traded on each instrument. This means that, as the trade volume per instrument increases, the margin percentage also increases, relevant to the dynamic leverage value of each instrument.

            <br/><br/>Also, it is important to note that margin calculations are done per instrument traded. So, when a client has open positions on multiple instruments, the margin is calculated separately on each.

            <br/><br/>In the examples below, you can see how dynamic margin is calculated. Kindly note that the values in the tables are for illustrative purposes only and should not be used for making trading calculations.</p>
      </section>
      
      <section className="margin-leverage">
        <h2>About Leverage</h2>
        <p>Using leverage means that you can trade positions larger than the amount of money in your trading account...</p>
      </section>
      
      <section className="margin-monitoring">
        <h2>Margin Monitoring</h2>
        <p>At Oslo Capitals, you can control your real-time risk exposure by monitoring your used and free margin...</p>
      </section>
      
      <section className="margin-risk">
        <h2>Leverage Risk</h2>
        <p>Leverage can help amplify gains but also increase potential losses. It is crucial to apply proper risk management...</p>
      </section>
      
      <section className="margin-call">
        <h2>Margin Call</h2>
        <p>Oslo Capitals follows a margin call policy to ensure that clients' risk exposure remains within acceptable levels...</p>
      </section>
      
      <section className="margin-stopout">
        <h2>Stop-Out Level</h2>
        <p>The stop-out level refers to the equity level at which open positions get automatically closed...</p>
      </section>
      
      


      <br/><br/><br/><br/>
      <section className="protection-steps">
        <h2>Take Steps to Protect Yourself</h2>
        <div id="step" className="step">
            <div className="step1img">
                <img id="step1img" src="/images/images.png"alt="step1"/>

            </div>
            <div className="step1text">
                <p>Keep your Personal Area private, never share access and personal documents. Don't let anyone use your name to create an Oslo Capitals account or share your security information.</p>
            </div>
        </div>
      </section>

    <br/><br/>
      
        <div id="step" className="step">
            <div className="step1img">
                <img id="step1img" src="/images/images_2.png"alt="step1"/>

            </div>
            <div className="step1text">
                {/* <p>Keep your Personal Area private, never share access and personal documents. Don't let anyone use your name to create an Oslo Capitals account or share your security information.</p> */}
                <p>Only conduct financial activities within the Oslo Capitals Personal Area and avoid transferring funds to unknown accounts.</p>
            </div>
        </div>
    </div>
  );
};

export default MarginPage;
