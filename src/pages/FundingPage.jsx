import React from "react";
import "../style/FundingPage.css";

const fundingOptions = [
  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    currencies: "AUD, CAD, EUR, GBP, HKD, JPY, NZD, SGD, USD, CHF, AED, BHD",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    currencies: "AUD, CAD, EUR, GBP, HKD, JPY, NZD, SGD, USD, AED",
    time: "1 business day from when the funds are received",
    fees: "No fees",
  },
  {
    id: "neteller",
    name: "Neteller",
    currencies: "AUD, CAD, EUR, GBP, JPY, THB, BRL, SGD, USD",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "skrill",
    name: "Skrill",
    currencies: "AUD, CAD, EUR, GBP, JPY, USD",
    time: "Instant funding",
    fees: "No fees above 10,000$ - 2% for larger amounts",
  },
];

const FundingPage = () => {
  return (
    <div className="funding-container">
      {/* Header Section */}
      <section className="funding-header">
        <h1>Funding Options</h1>
        <p>
          Oslo Capitals offers over 10+ flexible funding options in 10+
          different<br/> base currencies. Deposit instantly with 0% Deposit fees*
        </p>
      </section>

      {/* Fast & Secure Section */}
      <section className="funding-secure">
        <h2>Fast & Secure Funding Options</h2>
        <p>
          It is quick and easy to deposit funds into your Oslo Capitals trading
          account. Funds can be deposited using a wide range of payment methods
          including credit card, debit card, payment wallets including Neteller
          and Skrill, online banking and bank wire transfer.
        </p>
      </section>

      {/* Funding Options */}
      <div className="funding-option">
        <h2>Available Funding Options</h2>
      <section className="funding-options">
        
        <div className="funding-cards">
          {fundingOptions.map((option) => (
            <div key={option.id} className="funding-card">
              <h3>{option.name}</h3>
              <p>
                <strong>Accepted Currencies:</strong> {option.currencies}
              </p>
              <p>
                <strong>Deposit Time:</strong> {option.time}
              </p>
              <p>
                <strong>Deposit Fees:</strong> {option.fees}
              </p>
              <button className="funding-button">DEPOSIT NOW</button>
              
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* Bank Fees Section */}
      <section className="funding-bank-fees">
        <h2>Bank Fees and Costs</h2>
        <p>
          Oslo Capitals does not charge any deposit fees and will cover
          internal bank fees for all international deposits.
        </p>
      </section>

      {/* Third Party Payments Section */}
      <section className="funding-third-party">
        <h2>Third Party Payments</h2>
        <p>
          Oslo Capitals does not accept payments from third parties and will
          only accept funds received directly from the named trading account
          holder.
        </p>
      </section>
    </div>
  );
};

export default FundingPage;
