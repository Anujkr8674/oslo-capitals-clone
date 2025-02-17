import React from "react";
import "../style/SwapRates.css"; // External CSS file for styling

const SwapRates = () => {


    const data = [
        {
          spreads_symbol: "ACWI",
          spreads_long: "-5.00",
          spreads_short: "-2.50",
        },
        {
          spreads_symbol: "ADAUSD",
          spreads_long: "-20.00",
          spreads_short: "-20.00",
        },
        {
          spreads_symbol: "AGG",
          spreads_long: "-5.00",
          spreads_short: "-2.50",
        },
        {
          spreads_symbol: "AUDCAD",
          spreads_long: "-5.72",
          spreads_short: "0.78",
        },
        {
          spreads_symbol: "AUDCHF",
          spreads_long: "2.37",
          spreads_short: "-5.77",
        },
        {
          spreads_symbol: "AUDJPY",
          spreads_long: "6.07",
          spreads_short: "-10.94",
        },
        {
          spreads_symbol: "AUDNZD",
          spreads_long: "-7.46",
          spreads_short: "-1.06",
        },
        {
          spreads_symbol: "AUDSGD",
          spreads_long: "-7.52",
          spreads_short: "-1.70",
        },
        {
          spreads_symbol: "AUDUSD",
          spreads_long: "-4.47",
          spreads_short: "1.08",
        },
        {
          spreads_symbol: "AUS200",
          spreads_long: "-1.25",
          spreads_short: "0.21",
        },
        {
          spreads_symbol: "BCHUSD",
          spreads_long: "-10.00",
          spreads_short: "-10.00",
        },
        {
          spreads_symbol: "BIL",
          spreads_long: "-5.00",
          spreads_short: "-2.50",
        },
        {
          spreads_symbol: "BND",
          spreads_long: "-5.00",
          spreads_short: "-2.50",
        },
        {
          spreads_symbol: "BSV",
          spreads_long: "-5.00",
          spreads_short: "-2.50",
        },
        {
          spreads_symbol: "BTCUSD",
          spreads_long: "-10.00",
          spreads_short: "-10.00",
        },
        {
          spreads_symbol: "BWPUSD",
          spreads_long: "-39.00",
          spreads_short: "-67.70",
        },
        {
          spreads_symbol: "CADCHF",
          spreads_long: "5.27",
          spreads_short: "-8.29",
        },
      ];

      

  return (
    <div className="swap-container">
      {/* Header Section */}
      <header className="swap-header">
        <h1>Swap Rates</h1>
        <p>Oslo Capitals understands that competitive swap rates are important to any trader.</p>
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



      
      <div className="imgtext">

<div className="img1">
    <img src="/images/regimg.png" alt="girl"/>
      </div>
  

  <div  id="text" className="text">
    {/* <p id="p">You are safe with us.</p> */}
    
    <h1  className="h1">Regulations
    </h1 >
    <p>If you’ve been wondering, ‘is Oslo Capitals legit?’, you can rest assured that we are a licensed broker, regulated by leading international governing bodies globally.</p>
    <br/>
    <h1  className="h1">Account security</h1>
    <p>Prevent unauthorized access to your secure trading accounts by choosing a security option – either phone or email – during your registration process.</p>
    </div>
    </div>

    <br/>



    
    <div id="understanding" className="understanding">
            <h1>Get Competitive Forex Swap Rates</h1>
            <div id="understanding1" className="understanding1">
                <div  id="swapunder" className="understandingtext1">
                    <p>At Oslo Capitals, we offer among the most competitive swap rates in the industry. What this means is that when you keep positions open overnight, you don’t need to worry about the overnight/rollover fee eating into your earnings.</p>
                    <p>To find out the rollover fee, just use the handy forex swap rates calculator, on MetaTrader 5. Simply choose the financial instrument which you intend to hold an overnight position, fill in the currency and trade size details, and click on “Calculate.”</p>
                </div>
                <div className="understandingtext2">
                    <p>Oslo Capitals all-in-one FX calculator allows you to calculate all the important parametres of your trade including:</p>
                    <ul>
                        <li>Pip value</li>
                        <li>Contract size</li>
                        <li>Swap rate</li>
                        <li>Margin and potential gain</li>
                        <li>across all trading instruments.</li>
                    </ul>
                    <p>Streamline your process and manage your strategies. Leave the manual calculations to us.</p>
                </div>
            </div>
         </div>



         
      <section className="comm-best-platform">
      <h2>What You Should Know about Forex Swap Rates</h2>
        <div className="content1">
            <div className="image-container">
                <img src="/images/swap1.png" alt="Trading Platform" />
            </div>
          <div className="text-content1">
            <ul>
                <li>Swap rates are applied at 00:00 platform time</li>
                <li>Swaps are applied each night on open positions only</li>
                <li>Swap rates are calculated in points and can be positive or negative depending on the interest rate difference of the two currencies</li>
                <li>Some forex pairs could have negative swap rates on both long and short positions</li>
                <li>Swap rates are calculated in points. MT4 and MT5 convert these points automatically into your account currency</li>
                <li>The rates are triple the usual amount on Wednesday nights, to account for the weekend**</li>
                <li>Each forex pair has its own rollover fee, which is measured in the standard size of one lot or 100,000 units</li>
            </ul>
            <p>** Please be informed that on some instruments the triple Swap is charged on Friday, please check platform specification for your chosen instrument</p>
           </div>
          
        </div>
       </section>
       <br/><br/><br/>


      

   

      {/* Forex Swap Explanation */}
      <section className="swap-info">
        <h2>What Are Forex Swap Rates?</h2>
            <div className="swap-information">
                <div className="swap-info1">
                    <p>The swap charges in forex or rollover interest rates is the net interest return that a trader accumulates on a currency position held overnight. This fee is charged when the trader borrows one currency to buy another, as part of forex trading.</p>
                    <p>For instance, if you are buying EUR/USD, you might borrow in US Dollars and buy Euros with the amount. In doing so, you will need to pay interest on the borrowed US Dollars and earn interest on the Euros you bought.</p>
                    <p>The net interest fee is calculated based on the difference in interest rates of the two traded currencies. If the forex swap rate calculation is positive, the trader gains, while if it is negative, it is a cost for the trader.</p>
                </div>

                <div className="swap-info2">
                    <p>Normally, deposit and credit rates on the same currency differ. The credit rate is usually higher than the deposit rate. That is why forex swap rates for long and short positions on the same currency pair are different. The “storage” for holding a position overnight depends on several factors, such as:The current interest rate differential between two currencies</p>
                    <p>Currency pair price fluctuations</p>
                    <p>Behaviour of the forward market</p>
                    <p>Swap points of the counterparty</p>
                    <p>Position of the liquidity provider in the market hierarchy</p>
                    <p>Difference between forex swaps for long and short positions</p>
                    
                </div>
            </div>
      </section>



      <section id="swapimage" className="comm-best-platform">
      {/* <h2>What You Should Know about Forex Swap Rates</h2> */}
        <div id="swapcontent" className="content1">
            <div className="image-container">
                <img src="/images/swap2.png" alt="Trading Platform" />
            </div>
          <div className="text-content1">
            <h2 id="contentswap">
            How Does a Forex Swap Work?</h2>
            <p>When traders make a deal to buy or sell a currency, they commit themselves to making the final payments on the “value date.” The settlement is carried out within two working days of the transaction in the spot market. When the position remains open and is rolled over to the next day, it means that the value date shifts to a day ahead.</p>
            <p>The corresponding volumes of currencies in the trade are borrowed and lent from the interbank market, at the current credit interest and deposit rates. So, the gains from lending and the cost of borrowing are transferred to the trader by their broker. Either the position gets re-opened automatically, at a new value date, adjusted to swap rate and a new price, or the swap is credited to or debited from the trader’s account, while the position is left with the previous price.</p>
            </div>
          
        </div>
       </section>
       <br/><br/><br/>







      

      {/* Calculation Section */}
      <section className="swap-calculation">
        <h2>Calculation of Forex Swap Rates</h2>
        <p>To calculate the forex rollover rates:</p>

        <p>Subtract the interest rate of the base currency from the interest rate of the quote currency</p>

        <p>Then, divide that amount by 365 times the base exchange rate</p>
      </section>

     



      <div  id="swap-profitloss" className="profitloss">
          <div className="profit">

          <img src="/images/swap5.png" alt="profit"/><br/>
            <p>Now, in the next hour, if the price moves to 0.6880/0.6882, you have a winning trade. You could close your position by selling at the current price of AUD 0.6880.</p>
            <p>Now, the interest rate of the currency you are buying (EUR: 0.25%) is lower than the currency you are selling (USD: 1.75%). So, storage will be deducted from your trading account. However, the broker will charge a fee or mark-up for overnight swaps.</p>
          
            
           
          </div>

          <div className="loss">
          <img src="/images/swap4.png" alt="loss"/>
          <p>When your long position is rolled over to the next day, $5.30 will be deducted from your trading account</p>
          
         </div>
         </div>



            
      {/* Forex Swap Explanation */}
      <section id="swap-info1" className="swap-info">
        <h2>Importance of Swap Charges in Forex</h2>
            <div className="swap-information">
                <div className="swap-info1">
                    <p>Swap calculations are done at the end of the day, for positions that remain open after 5:00pm ET. This is important for those who want to hold on to long term positions for a considerable period of time. Traders who use strategies focused not only on intraday price fluctuations but also on trend trading, on the basis of fundamental market changes, need to carefully think about swap rates.</p>
                    <p>In addition, forex swap charges are vital for traders using carry trade strategies. These strategies are entirely based on the interest rate differential between two currencies. The currency with a lower yield becomes the funding currency (borrowed currency) and the borrowed amount is used to buy a higher yield currency.</p>
                </div>

                <div className="swap-info2">
                   <p>For instance, the Swiss franc (CHF) has a negative spread with almost every currency, which suggests that a trader who goes long on the ‘swissy’ can expect negative swap rates. On the other hand, if someone goes short on it, they can expect a positive swap when positions are held overnight. In contrast, going long on the GBP can result in positive swap rates against the euro, yen and swissy, while negative swap could be expected with the US, Canadian and Australian dollars.</p>
                   <p>Forex swaps are also important for hedging purposes. If a trader opens a position, expecting a certain type of market movement that hasn’t begun yet, they may consider opening another position in the opposite direction, without closing the first one. This is often called “lock mode hedging.” The low spread between the rates, which is ensured by interbank swap, can help minimise the cost of maintaining such positions.</p>
                </div>
            </div>
      </section>



      <section id="swapplate" className="forex-best-platform">
      <h2>How to Find Oslo Capitals’<br/>
      Swap Rates in MT5?</h2>
      <p id="swappara">To check the latest rates on MT5 accounts:</p><br/>
        <div className="content">
          <div  id="textcontent" className="text-content">
            <p><b><i class="fa-solid fa-check"></i>Go to “Market Watch” section</b></p>
            <p><b><i class="fa-solid fa-check"></i>Right-click to select “Symbols”</b></p>
            <p><b><i class="fa-solid fa-check"></i>  Choose the forex pair you want to trade</b></p>
            <p><b><i class="fa-solid fa-check"></i>  Click on the “Properties” for the pair, (on MT5, please select ‘Specification’)</b></p>
            <p><b><i class="fa-solid fa-check"></i>  All the information on the pair, such as forex swap rate, stop level, initial margin and more, will be displayed</b></p>
            
            
          </div>
          <div className="image-container">
            <img src="/images/swap3.png" alt="Trading Platform" />
          </div>
        </div>
       </section>

      <br/><br/>



      
        
<section id="forex-spreads" className="forex-spreads">
      <div className="table-container">
      <h2>Swap Points</h2>
      <p>The following rates will be applied at 2023</p><br/>
      <p>Swap rates are subject to change.</p>
        <p>Live swap rates are available on the MT5 platforms.</p>
        <table className="forex-table">
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Long</th>
          <th>Short</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.spreads_symbol}</td>
            <td>{row.spreads_long}</td>
            <td>{row.spreads_short}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </section>



        
    <br/><br/><br/><br/>

{/* Protection Steps */}
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

export default SwapRates;
