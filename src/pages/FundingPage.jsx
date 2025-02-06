import React from "react";
import "../style/FundingPage.css";

const fundingOptions = [
  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    currencies: "AUD, EUR, GBP, HKD",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    image: "/images/fundingbank.png",
    currencies: "AUD, CAD, EUR, GBP",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "neteller",
    name: "Neteller",
    image: "/images/fundingvisa.png",
    currencies: "AUD, CAD, EUR, GBP",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "skrill",
    name: "Skrill",
    image: "/images/fundingskrill.png",
    currencies: "AUD, CAD, EUR, GBP, JPY",
    time: "Instant funding",
    fees: "No fees ",
  },
  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    currencies: "AUD, CAD, EUR, GBP, HKD",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    image: "/images/fundingbank.png",
    currencies: "AUD, CAD, EUR, GBP",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "neteller",
    name: "Neteller",
    image: "/images/fundingvisa.png",
    currencies: "AUD, CAD, EUR, GBP",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "skrill",
    name: "Skrill",
    image: "/images/fundingskrill.png",
    currencies: "AUD, CAD, EUR, GBP, JPY",
    time: "Instant funding",
    fees: "No fees ",
  },
  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    currencies: "AUD, CAD, EUR, GBP, HKD",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    image: "/images/fundingbank.png",
    currencies: "AUD, CAD, EUR, GBP",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "neteller",
    name: "Neteller",
    image: "/images/fundingvisa.png",
    currencies: "AUD, CAD, EUR, GBP",
    time: "Instant funding",
    fees: "No fees",
  },
  {
    id: "skrill",
    name: "Skrill",
    image: "/images/fundingskrill.png",
    currencies: "AUD, CAD, EUR, GBP, JPY",
    time: "Instant funding",
    fees: "No fees ",
  },
];

const FundingPage = () => {
  return (
    <div className="funding-container">
      {/* Header Section */}
      <section className="funding-header">
        <h1>Funding Options</h1>
        <p>
          Extrede offers over 10+ flexible funding options in 10+
          different<br/> base currencies. Deposit instantly with 0% Deposit fees*
        </p>
      </section>

      {/* Fast & Secure Section */}
      <section className="funding-secure">
        <h2>Fast & Secure Funding Options</h2>
        <p>
          It is quick and easy to deposit funds into your extrede trading
          account. Funds can be deposited using a wide range of payment methods
          including credit card, debit card, payment wallets including Neteller
          and Skrill, online banking and bank wire transfer.
        </p>
      </section>

      {/* Funding Options */}
      <div className="funding-option">
        <h2>Available Withdraw Options</h2>
      <section className="funding-options">
        
        <div className="funding-cards">
          {fundingOptions.map((option) => (
            <div key={option.id} className="funding-card">
              <div className="fundingoption">
               <img src={option.image} alt={option.name} className="funding-image"/>
              <p>{option.name}</p>
              </div>

              <div className="fundingoptiontext">
              <p>
                <strong>Accepted Currencies:</strong><br/> {option.currencies}
              </p>
              <p>
                <strong>Deposit Time:</strong> <br/>{option.time}
              </p>
              <p>
                <strong>Deposit Fees:</strong> <br/>{option.fees}
              </p>
              <button className="funding-button">DEPOSIT NOW</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>

          <br/><br/>

      <div className="imgtext">
      <div className="img1">
          <img src="/images/fundingrupee.png" alt="girl"/>
          
        </div>

        <div className="text">
          
          
          <h1  className="h1">Bank Fees and Costs
          </h1 >
          <p>Extrede does not charge any deposit fees and will cover internal bank fees for all international deposits.</p>

            <p>If Extrede receives a receipt showing the original deposit fee amount is no more than 50 USD, Oslo Capitals will cover clients international bank fees (charged by the clients bank) for deposits over 10,000 USD.</p>

          <p>  Extrede does not charge withdrawal fees however clients may be charged by an intermediary bank for international transactions.</p>
          
          <br/>
          
          </div>
          
          
          </div>




      {/* Third Party Payments Section */}
      <section className="funding-third-party">
        <h2>Third Party Payments</h2>
        <p>
           extrede does not accept payments from third parties and will only accept funds that we receive directly from the named trading account holder. All funds deposited into your trading account must be under the same name as your Oslo Capitals trading account. We do not accept deposits from joint bank accounts or cards to an individual trading account, however clients can deposit from individual bank accounts to a joint trading account.
        </p>
        <br/><br/>
        <h2>Fast and Easy Payments</h2>
        <p>
        Please login to our secure Client Area, on the left side of the screen click on “Funding”, choose “Deposit”, select the trading account to which you wish to deposit and click “Submit”.
        </p>
        <p><b>The minimum deposit for both Standard and Raw accounts is 100 AUD or equivalent.</b></p>
        
        <p>
          Iress – The minimum deposit is 1000 AUD or equivalent. Please note, login details will only be sent once the funds are available on your IRESS account.
        </p>
        
        <p>Please allow up to five business days for us to receive an international transfer. Funding issues may arise due to bank or country restrictions and clients should contact us if they experience any funding difficulties. Please contact us via live chat or email.</p>
        <br/><br/>
        <h2>Segregated Funds</h2>
        <p><b>Client funds are held with AA rated Global Banks and are held in segregated accounts away from company’s own funds.</b></p>
      </section>

      
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

    {/* payment */}

    <h1 id="payment">Payment protection</h1>
    <p id="payment">Read about our various premium payment security features to protect your payment transactions.</p>
    
    <div className="imgtext">


  

  <div  id="text" className="text">
    {/* <p id="p">You are safe with us.</p> */}
  
    
    <h1  className="h1">Seamless withdrawals
    </h1 >
    <p>Our automatic withdrawal feature ensures that we process your withdrawal requests instantly, giving you access to your funds even on weekends. Promptness of payment depends on your selected payment method.</p>
    <br/>
    <h1  className="h1">Segregated accounts</h1>
    <p>We safeguard your funds by holding them segregated from our own. Our funds are always larger, so we can meet your withdrawal needs any time of the day.</p>
    <br/>
    <h1 className="h1">3D Secure verification</h1>
    <p>We ensure secure trading with 3D Secure debit card transactions, offering extra fraud protection through a one-time pin sent to your phone</p>
    <br/>
    {/* <h1 className="h1">PCI DSS compliance</h1>
    <p>We're fully audited, adhering to all PCI DSS needs, ensuring card data security through effective management, custom security settings, and regular vulnerability scans</p> */}

    </div>

    <div className="img1">
    <img src="/images/regimg.png" alt="girl"/>
      </div>

    </div>



<br/><br/>

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

export default FundingPage;
