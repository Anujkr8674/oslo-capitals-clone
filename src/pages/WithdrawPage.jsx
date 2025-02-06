import React from "react";
import "../style/FundingPage.css";

const fundingOptions = [
  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "International Bank Wire",
    image: "/images/fundingbank.png",
    Acceptedcurrencies: "(Except AUD)",
    WithdrawalsTime: "1 business day from when the funds are received*",
    WithdrawalsFees: "No fees",
  },

  {
    id: "skrill",
    name: "Skrill",
    image: "/images/fundingskrill.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "1% + country fees (if applicable)",
  },

  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "International Bank Wire",
    image: "/images/fundingbank.png",
    Acceptedcurrencies: "(Except AUD)",
    WithdrawalsTime: "1 business day from when the funds are received*",
    WithdrawalsFees: "No fees",
  },

  {
    id: "skrill",
    name: "Skrill",
    image: "/images/fundingskrill.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "1% + country fees (if applicable)",
  },

  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "No fees",
  },
  {
    id: "bank-transfer",
    name: "International Bank Wire",
    image: "/images/fundingbank.png",
    Acceptedcurrencies: "(Except AUD)",
    WithdrawalsTime: "1 business day from when the funds are received*",
    WithdrawalsFees: "No fees",
  },

  {
    id: "skrill",
    name: "Skrill",
    image: "/images/fundingskrill.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "1% + country fees (if applicable)",
  },

  {
    id: "visa",
    name: "VISA Credit & Debit Card",
    image: "/images/fundingvisa.png",
    Acceptedcurrencies: "AUD, EUR, GBP, HKD",
    WithdrawalsTime: "1 business day",
    WithdrawalsFees: "No fees",
  },

];

const FundingPage = () => {
  return (
    <div className="funding-container">
      {/* Header Section */}
      <section className="funding-header">
        <h1>Withdraw Funds</h1>
        
            <p>For faster processing all account holders are now required to submit</p>
            <br/><p>withdrawal requests from Oslo Capitals Secure Client Portal.</p>
           
      </section>

      {/* Fast & Secure Section */}
      <section className="funding-secure">
        <h2>Fast & Easy Withdrawals</h2>
        <p>
            It is quick and easy to withdraw funds from your extrede
             trading account via our Secure Client Portal.
            Funds can be withdrawn using a wide range of funding
            methods including credit card, debit card, payment wallets
            including Neteller and Skrill, online banking and bank wire
            transfer
        </p>
      </section>

      {/* Funding Options */}
      <div className="funding-option">
        <h2>Available Funding Options</h2>
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
                <strong>Accepted Currencies:</strong><br/> {option.Acceptedcurrencies}
              </p>
              <p>
                <strong>Withdrawals Time:</strong> <br/>{option.WithdrawalsTime }
              </p>
              <p>
                <strong>Withdrawals Fees:</strong> <br/>{option.WithdrawalsFees}
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
          
          
          <h1  className="h1">Withdraw Funds From Your Account
          </h1 >
          <p><b>Simply log into the Secure Client Portal</b>
                <br/>
                Please note, the withdrawal amount will need to be the same amount as your deposit and via the same withdrawal method. Once deposits have been withdrawn, you can use an alternative method to withdraw profits.
            </p>
            <p>
            e.g. 1 If your initial deposit is X and was made by card deposit. The card withdrawal must be made to the same credit/debit card.
            </p>
            <p>
            e.g. 2 If your initial deposit was made via bank wire, it would need to be returned to the same bank account and so on.
            </p>
            <p>
            If you have used several deposit methods, you will need to withdraw the same amount you deposited back to each one, starting with any card deposits. Once card deposits have been withdrawn back to the same credit/debit card, you will make the remaining withdrawals in the order that the initial deposits were made. You can then choose any of the previously used funding methods to withdraw profits, subject to the approval of the accounts team.
            </p>
          <br/>
          
          </div>
          
          
          </div>




      {/* Third Party Payments Section */}
      <section className="funding-third-party">
        <h2>Withdrawal Fees</h2>
        <p>
            Extrede does not charge any additional internal fees for deposits or withdrawals. However, please note payments to and from overseas banking institutions may attract intermediary transfer fees from either party which are independent of extrede. Extrede accepts no responsibility for any bank fee and any such fees will be the responsibility of the client. Please refer to the table above for more information on our withdrawal methods.
        </p>
        <br/><br/>
        <h2>Assistance with Withdrawals</h2>
        <p>
            Funding issues may arise due to bank or country restrictions and clients should contact us if they experience any funding difficulties. Please contact us via live chat or email.
        </p>

        <p>
            For more information on withdrawals and any further general advice, please visit our FAQs section here.
        </p>
        
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

    



<br/><br/>

{/* Protection Steps */}
<section className="protection-steps">
  <h2  >Take Steps to Protect Yourself</h2>
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
