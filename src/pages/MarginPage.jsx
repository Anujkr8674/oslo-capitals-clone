import React from "react";
import "../style/MarginPage.css";

const MarginPage = () => {
  return (
    <div className="margin-container">
      <header className="margin-header">
        <h1 className="margin-title">Swap Rates</h1>
        <p className="margin-subtitle">
          Extrede   understands that competitive swap rates are important to any trader.
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
        <p>At Extrede  , clients have the flexibility to trade using the same margin requirements and leverage from 1:1 to 1000:1.</p>
        <br/>
        <p>Extrede  ’s margin requirements and leverage are based on the total equity in your account(s) as described below:</p>
     
      
      <table className="margin-dynamic-table">
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
      
      <section id="margin-about" className="margin-about">
        <h2>About Margin</h2>
        <p>Margin is the amount of collateral to cover any credit risks arising during your trading operations.<br/>

            <br/>Margin is expressed as the percentage of position size (e.g. 5% or 1%), and the only real reason for having funds in your trading account is to ensure sufficient margin. On a 1% margin, for instance, a position of $1,000,000 will require a deposit of $10,000.<br/>

            <br/>For Forex, Gold and Silver, new positions can be opened if the margin requirement for the new positions is equal or less than the free margin of the account. When hedging, positions can be opened even when the margin level is below 100% because the margin requirement for hedged positions is Zero.<br/>

            <br/>For all other instruments, new positions can be opened if the margin requirement for the new positions is equal or less than the free margin of the account. When hedging, margin requirement for the hedged position is equal to 50%. New hedged positions can be opened if the final margin requirements will be equal or less than the total equity of the account.</p>
        </section>
      
      <section className="margin-dynamic">
        <h2>Dynamic Margin for Cryptocurrencies</h2>
        <p>At Extrede  , leverage on Cryptocurrency CFDs is dynamic and adapts automatically based on the volume traded on each instrument. This means that, as the trade volume per instrument increases, the margin percentage also increases, relevant to the dynamic leverage value of each instrument.

            <br/><br/>Also, it is important to note that margin calculations are done per instrument traded. So, when a client has open positions on multiple instruments, the margin is calculated separately on each.

            <br/><br/>In the examples below, you can see how dynamic margin is calculated. Kindly note that the values in the tables are for illustrative purposes only and should not be used for making trading calculations.</p>
          <table className="margin-dynamic-table">
            <thead>
          <tr>
            
            <th>Lots</th>
            <th>Dynamic Margin Percentage</th>
            <th>Leverage</th>
            
          </tr>
        </thead>
        <tbody>
          <tr><td>0-40</td><td>0.2%</td><td>500:1</td></tr>
          <tr><td>40-120</td><td>0.4%</td><td>250:1</td></tr>
          <tr><td>120-200</td><td>2%</td><td>50:1</td></tr>
          <tr><td>200+</td><td>100%</td><td>1:1</td></tr>
        </tbody>

          </table>

          <p><strong>Example 1:</strong> Client trades 10 lots of BTCUSD at 25,000 USD opening price, with USD account base currency.</p>

          <table className="margin-dynamic-table">
          <thead>
              <tr> 
                <th>Lots</th>
                <th>Dynamic Margin Percentage</th>
                <th>Actual Used Margin</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>10</td>
                <td>0.2%</td>
                <td>Lots * Contract Size * OpenPrice * MarginPercentage = 10 * 1 * 25,000 * 0.2% = 500 USD</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>	Total Margin = 500 USD</td>
            </tr>
        </tbody>

          </table>
          <p><strong>Example 2:</strong> Client trades 50 lots of BTCUSD at 25,000 USD opening price, with USD account base currency.</p>


          <table className="margin-dynamic-table">
          <thead>
              <tr> 
                <th>Lots</th>
                <th>Dynamic Margin Percentage</th>
                <th>Actual Used Margin</th>
              </tr>
          </thead>
          <tbody>
                <tr>
                  <td>40</td>
                  <td>0.2%</td>
                  <td>Lots * Contract Size * OpenPrice * MarginPercentage = 40 * 1 * 25,000 * 0.2% = 2,000 USD</td>
              </tr>
              <tr>
                  <td>10</td>
                  <td>0.4%</td>
                  <td>Lots * Contract Size * OpenPrice * MarginPercentage = 10 * 1 * 25,000 * 0.4% = 1,000 USD</td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td>Total Margin = 3,000 USD</td>
              </tr>
          </tbody>


          </table>
          <p><strong>Example 3:</strong> Client trades 210 lots of BTCUSD at 25,000 USD opening price, with USD account base currency.</p>


          <table className="margin-dynamic-table">
          <thead>
              <tr> 
                <th>Lots</th>
                <th>Dynamic Margin Percentage</th>
                <th>Actual Used Margin</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>0</td>
                <td>0.2%</td>
                <td>Lots * Contract Size * OpenPrice * MarginPercentage = 40 * 1 * 25,000 * 0.2% = 2,000 USD</td>
            </tr>
            <tr>
                <td>80</td>
                <td>0.4%</td>
                <td>Lots * Contract Size * OpenPrice * MarginPercentage = 80 * 1 * 25,000 * 0.4% = 8,000 USD</td>
            </tr>
            <tr>
                <td>80</td>
                <td>2%</td>
                <td>Lots * Contract Size * OpenPrice * MarginPercentage = 80 * 1 * 25,000 * 2% = 40,000 USD</td>
            </tr>
            <tr>
                <td>10</td>
                <td>100%</td>
                <td>Lots * Contract Size * OpenPrice * MarginPercentage = 10 * 1 * 25,000 * 100% = 250,000 USD</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td> Total Margin = 300,000 USD</td>
            </tr>
        </tbody>


          </table>
          <p>In cases where the account leverage is below the leverage value of the traded instrument, leverage decreases to meet the account leverage value.</p>
          <p>In the examples below, you can see how dynamic margin is calculated and restricted by account leverage. Kindly note that the values in the tables are for illustrative purposes only and should not be used for making trading calculations.</p>

            <br/>
          <p>Examples:</p>
            <br/>

           <p> BTCUSD</p>


           <table id="dynamic" className="margin-dynamic-table">
              <thead>
                <tr>
                    <th>Lots</th>
                    <th>Dynamic Margin Percentage</th>
                    <th>Leverage</th>
                    <th>Account Leverage</th>
                    <th>Leverage Used</th>
                    <th>Used Dynamic Margin Percentage</th>
                </tr>
               </thead>

               <tbody>
                <tr>
                    <td>0-40</td>
                    <td>0.2%</td>
                    <td>500:1</td>
                    <td></td>
                    {/* <td>100:1</td> */}
                    <td>100:1</td>
                    <td>1%</td>
                </tr>
                <tr>
                    <td>40-120</td>
                    <td>0.4%</td>
                    <td>250:1</td>
                    <td></td>
                    <td>100:1</td>
                    <td>1%</td>
                </tr>
                <tr>
                    <td>120-200</td>
                    <td>2%</td>
                    <td>50:1</td>
                    <td>100:1</td>
                    <td>50:1</td>
                    <td>2%</td>
                </tr>
                <tr>
                    <td>200+</td>
                    <td>100%</td>
                    <td>1:1</td>
                    <td></td>
                    <td>1:1</td>
                    <td>100%</td>
                </tr>
            </tbody>


            </table>
            <p><strong>Example 4:</strong> Client trades 210 lots of BTCUSD at 25,000 USD opening price, with USD account base currency, and account leverage 100:1.</p>


            <table className="margin-dynamic-table">
              <thead>
                  <tr> 
                    <th>Lots</th>
                    <th>Dynamic Margin Percentage</th>
                    <th>Actual Used Margin</th>
                  </tr>
              </thead>

              <tbody>
              <tr>
                  <td>40</td>
                  <td>1%</td>
                  <td>Lots * Contract Size * OpenPrice * MarginPercentage = 40 * 1 * 25,000 * 1% = 10,000 USD</td>
              </tr>
              <tr>
                  <td>80</td>
                  <td>1%</td>
                  <td>Lots * Contract Size * OpenPrice * MarginPercentage = 80 * 1 * 25,000 * 1% = 20,000 USD</td>
              </tr>
              <tr>
                  <td>80</td>
                  <td>2%</td>
                  <td>Lots * Contract Size * OpenPrice * MarginPercentage = 80 * 1 * 25,000 * 2% = 40,000 USD</td>
              </tr>
              <tr>
                  <td>10</td>
                  <td>100%</td>
                  <td>Lots * Contract Size * OpenPrice * MarginPercentage = 10 * 1 * 25,000 * 100% = 250,000 USD</td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td>Total Margin = 320,000 USD</td>
              </tr>
          </tbody>

          </table>

      </section>
      
      <section id="margin-leverage" className="margin-leverage">
        <h2>About Leverage</h2>
        Using leverage means that you can trade positions larger than the amount of money in your trading account. Leverage amount is expressed as a ratio, for instance 50:1, 100:1, or 500:1. Assuming that you have $1,000 in your trading account and you trade ticket sizes of 500,000 USD/JPY, your leverage will equate 500:1.

        <br/><br/>How would it be possible to trade 500 times the amount you have at your disposal? At Extrede   you have a free short-term credit allowance whenever you trade on margin: this enables you to purchase an amount that exceeds your account value. Without this allowance, you would only be able to buy or sell tickets of $1,000 at a time.

        <br/><br/>Extrede   shall monitor the leverage ratio applied to clients’ accounts at all times and reserves the right to apply changes to and amend the leverage ratio (i.e. decrease the leverage ratio), on its sole discretion and without any notice on a case by case basis, and/or on all or any accounts of the client as deemed necessary by Extrede  .
      </section>

      <section className="margin-risk">
        <h2>Leverage Risk</h2>
        <p>On the one hand, by using leverage, even from a relatively small initial investment you can make considerable profit. On the other hand, your losses can also become drastic if you fail to apply proper risk management.

        <br/><br/>This is why Extrede   provides a leverage range that helps you choose your preferred risk level. At the same time, we do not recommend trading close to a leverage of 1000:1 due to the high risk it involves.</p>
      </section>
      
      <section className="margin-monitoring">
        <h2>Margin Monitoring</h2>
        <p>At Extrede   you can control your real-time risk exposure by monitoring your used and free margin.

        <br/><br/>Used and free margin together make up your equity. Used margin refers to the amount of money you need to deposit to hold the trade (e.g. if you set your account at a leverage of 100:1, the margin that you will need to set aside is 1% of your trade size). Free margin is the amount of money you left in your trading account, and it fluctuates according to your account equity; you can open additional positions with it, or absorb any losses.</p>
        
        </section>
      
     
      
      <section className="margin-call">
        <h2>Margin Call</h2>
        <p>Although each client is fully responsible for monitoring their trading account activity, Extrede   follows a margin call policy to guarantee that your maximum possible risk does not exceed your account equity.<br/><br/>

        As soon as your account equity drops below 50% of the margin needed to maintain your open positions, we will attempt to notify you with a margin call warning you that you do not have sufficient equity to support open positions.</p>
      </section>
      
      <section className="margin-stopout">
        <h2>Stop-Out Level</h2>
        <p>The stop-out level refers to the equity level at which your open positions get automatically closed. The stop-out level in a client’s account is reached when the equity in the trading account is equal or falls below 20% of the required margin.</p>
       </section>
      
      


      <br/><br/><br/><br/>
      <section className="protection-steps">
        <h2>Take Steps to Protect Yourself</h2>
        <div id="step" className="step">
            <div className="step1img">
                <img id="step1img" src="/images/images.png"alt="step1"/>

            </div>
            <div className="step1text">
                <p>Keep your Personal Area private, never share access and personal documents. Don't let anyone use your name to create an Extrede   account or share your security information.</p>
            </div>
        </div>
      </section>

    <br/><br/>
      
        <div id="step" className="step">
            <div className="step1img">
                <img id="step1img" src="/images/images_2.png"alt="step1"/>

            </div>
            <div className="step1text">
                {/* <p>Keep your Personal Area private, never share access and personal documents. Don't let anyone use your name to create an Extrede   account or share your security information.</p> */}
                <p>Only conduct financial activities within the Extrede   Personal Area and avoid transferring funds to unknown accounts.</p>
            </div>
        </div>
    </div>
  );
};

export default MarginPage;
