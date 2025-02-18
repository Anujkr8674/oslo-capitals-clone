import React from "react";
import "../style/OverNight.css";

const OverNight = () => {
  return (
    <div className="overnight-container">
      <header className="overnight-header ">
        <h1>OVERNIGHT POSITIONS</h1>
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
      <section className="overnight-text">
        <h2 >Keeping Your Positions Open Overnight</h2>
        <p>
          Positions held open overnight may be charged rollover interest. In the case of forex instruments,
          the amount credited or charged depends on both the position taken (i.e. long or short) and the rate
          differentials between the two currencies traded. In the case of stocks and stock indices, the amount
          credited or charged depends on whether a short or a long position has been taken.
        </p>
        <p>Kindly note that rollover interest is only applied to cash instruments. In the case of futures products, which have an expiry date, there are no overnight charges.</p>
      </section>

      <section className="overnight-text" >
        <h2 >About Rollover</h2>
       <p>Rollover is the process of extending the settlement date of an open position (i.e. date by which an executed trade must be settled). The forex market allows two business days for settling all spot trades, which implies the physical delivery of currencies.</p>
       <p>In margin trading, however, there is no physical delivery, and so all open positions must be closed daily at end-of-day (22:00 GMT) and re-opened on the following trading day. Therefore, this pushes out the settlement by one more trading day. This strategy is called rollover.</p>
       <p>Rollover is agreed on through a swap contract, which comes at a cost or gain for traders. Extrede   does not close and re-open positions, but it simply debits or credits trading accounts for positions held open overnight, depending on the current interest rates.</p>
      </section>

      <section id="overnight-rollover" className="overnight-text" >
        <h2 >Extrede   Rollover Policy</h2>
       <p>Extrede   debits or credits clients’ accounts and handles rollover interest at competitive rates for all positions held open after 22:00 GMT, the daily bank cutoff time.</p>
       <p>Although there is no rollover on Saturdays and Sundays when the markets are closed, banks still calculate interest on any position held open over the weekend. To level this time gap, Extrede   applies a 3-day rollover charge on Wednesdays for Forex and Spot Metals (Gold and Silver), and on Fridays for CFDs on Cash Indices, Cash Energies, and Stocks.</p>
      </section>

      <section  className="overnight-text">
        <h2 >Calculating Rollover</h2>
        <h2>For Forex and Spot Metals (Gold and Silver)</h2>
        <p>Rollover rates for positions on forex instruments and spot metals are charged the tomorrow-next day (i.e. tomorrow, and the next day) rate, including the Extrede   mark-up for holding positions overnight. Tom-next rates are not determined by Extrede   but are derived from the interest rate differential between the two currencies that a position was taken in.</p>
        <strong>Example:</strong>
        <p>Assuming that you trade in USDJPY and that the tom-next rates are as follows:<br/>
            +0.5% for a long position<br/>
            -1.5% for a short position<br/>
            In this scenario, the interest rates in the USA are higher than in Japan. A long position in the currency pair held open overnight would receive +0.5% – the Extrede   mark-up.<br/>
            Conversely, for a short position the calculation is -1.5% – the Extrede   mark-up.
        </p>
        <p>More generally, the calculation is as follows:</p>
        <p><strong>Trade size X (+/- tom-next rate – the Extrede   mark-up)*</strong></p>
        <p><strong>Here the +/- depends on rate differentials between the two currencies in a given pair.</strong></p>
        
        </section>
        <br/><br/>

      <section className="overnight-text" >
        <h2 >For Stocks and Stock Indices</h2>
        <p>Rollover rates for positions on stock and stock indices are determined by the underlying interbank rate of the stock or index (for example, for an Australian-listed security, that would be the interest rate charged between Australian banks for short-term loans), plus/minus the Extrede   mark-up on long and short positions respectively.</p>
        <strong>example:</strong>
        <p>Assuming that you trade in Unilever (a UK-listed stock) and that the short-term interbank rate in the UK is 1.5% p.a., for a long position held open overnight, the calculation is as follows:<br/>
            -1.5%/365 – the Extrede   daily mark-up<br/>
            Conversely, the calculation for a short position is +1.5%/365 – the Extrede   daily mark-up.
        </p><br/>
        <strong>More generally, the calculation is as follows (with daily rates as seen below):<br/>
            Trade size X closing price X (+/- short-term interbank rate – the Extrede   mark-up) <br/>
            Here the +/- depends on whether one has taken a short or a long position on an instrument.
        </strong>
       </section>

      <section className="overnight-text" >
        <h2 >Booking Rollover</h2>
        <p>22:00 GMT is considered to be the beginning and the end of a trading day. Any positions which are still open at 22:00 GMT sharp are subject to rollover and will be held open overnight. Positions opened at 22:01 are not subject to rollover until the next day, but if you open a position at 21:59, a rollover will take place at 22:00 GMT. For each position open at 22:00 GMT, a credit or debit will appear on your account within an hour.</p>
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

export default OverNight;
