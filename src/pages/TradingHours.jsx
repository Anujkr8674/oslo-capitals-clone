import React from "react";
import "../style/TradingHours.css";

const TradingHours = () => {
  return (
    <div className="trading-hours-container">
      <header className="trading-hours-header">
        <h1>TRADING HOURS</h1>
       
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

      <section className="trading-hours-section">
        <h2>Forex Market Hours</h2>
        <p>
          As one major forex market closes, another one opens. According to GMT, for instance, forex trading hours move
          around the world like this: available in New York between 01:00 pm – 10:00 pm GMT; at 10:00 pm GMT Sydney
          comes online; Tokyo opens at 00:00 am and closes at 9:00 am GMT; and to complete the loop, London opens at
          8:00 am and closes at 05:00 pm GMT. This enables traders and brokers worldwide, together with the
          participation of the central banks from all continents, to trade online 24 hours a day.
        </p>
      </section>

      <section className="trading-hours-section">
        <h2>More Activity, More Possibilities</h2>
        <p>
          The forex market is open 24 hours a day, and it is important to know which are the most active trading
          periods.
        </p>
        <p>
          For instance, if we take a less active period between 5 pm – 7 pm EST, after New York closes and before Tokyo
          opens, Sydney will be open for trading but with more modest activity than the three major sessions (London,
          US, Tokyo). Consequently, less activity means less financial opportunity. If you want to trade currency pairs
          like EUR/USD, GBP/USD or USD/CHF you will find more activity between 8 am – 12 pm when both Europe and the
          United States are active.
        </p>
      </section>

      <section className="trading-hours-section">
        <h2>Alertness and Opportunity</h2>
        <p>
          Other forex trading hours to watch out for are the release times of government reports and official economic
          news. Governments issue timetables for when exactly these news releases take place, but they do not coordinate
          releases between the different countries.
        </p>
        <p>
          It is thus worth finding out about the economic indicators published in the different major countries, as these
          coincide with the most active moments of forex trading. Such increased activity means bigger opportunities in
          currency prices, and sometimes orders are executed at prices that differ from those you expected.
        </p>
      </section>

      <section className="trading-hours-section">
        <h2>Trading Sessions</h2>
        <p>
          For day traders the most productive hours are between the opening of the London markets at 08:00 GMT and the
          closing of the US markets at 22:00 GMT. The peak time for trading is when the US and London markets overlap
          between 1 pm GMT – 4 pm GMT. The main sessions of the day are the London, US and Asian markets.
        </p>
        <ul>
          <li>
            <strong>LONDON SESSION</strong> – open between 8 am GMT – 5 pm GMT; EUR, GBP, USD are the most active
            currencies;
          </li><br/>
          <li>
            <strong>US SESSION</strong> – open between 1 pm GMT – 10 pm GMT; USD, EUR, GBP, AUD, JPY are the most active
            currencies;
          </li><br/>
          <li>
            <strong>ASIAN SESSION</strong> – opens at about 10 pm GMT on Sunday afternoon, goes into the European trading
            session at about 9 am GMT; not very suitable for day trading.
          </li>
        </ul>
      </section>

      <section className="trading-hours-section">
        <h2>Online Trading</h2>
        <p>
          Also   trading hours are between Sunday 22:05 GMT and Friday 21:50 GMT. When our dealing desk is closed,
          the trading platform does not execute trades and its features are only available for viewing.
        </p>
        <p>
          For any enquiries, technical difficulties, or urgent support, feel free to contact our 24-hour customer
          experience team by email or live chat any time. Please have your account login details with you so that we can
          help you with your orders.
        </p>
        <p>
          For closing positions, setting a take profit or stop loss order on an existing position you will also need to
          provide us with your ticket number. Then all you will need to do is request for a two-way quote on a particular
          currency pair and specify the transaction size (e.g. "I’d like a Dollar Japanese Yen quote for 10 lots").
        </p>
      </section>

      <br/><br/><br/><br/>
      <section className="protection-steps">
        <h2>Take Steps to Protect Yourself</h2>
        <div id="step" className="step">
            <div className="step1img">
                <img id="step1img" src="/images/images.png"alt="step1"/>

            </div>
            <div className="step1text">
                <p>Keep your Personal Area private, never share access and personal documents. Don't let anyone use your name to create an  Extrede   account or share your security information.</p>
            </div>
        </div>
      </section>

    <br/><br/>
      
        <div id="step" className="step">
            <div className="step1img">
                <img id="step1img" src="/images/images_2.png"alt="step1"/>

            </div>
            <div className="step1text">
                {/* <p>Keep your Personal Area private, never share access and personal documents. Don't let anyone use your name to create an  Extrede   account or share your security information.</p> */}
                <p>Only conduct financial activities within the  Extrede   Personal Area and avoid transferring funds to unknown accounts.</p>
            </div>
        </div>
    </div>
  );
};

export default TradingHours;
