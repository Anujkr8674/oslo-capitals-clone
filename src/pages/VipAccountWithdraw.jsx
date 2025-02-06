import React from "react";
// import "./VipAccountWithdraw.css";
import "../style/VipAccountWithdraw.css"

const VipAccountWithdraw = () => {
  return (
    <div className="vipaccountwithdraw">
    <div className="vipaccount-container">
      <header className="vipaccount-header">
        <h1>Withdraw Funds for VIP Clients</h1>
        <p>For faster processing, all account holders are now required to submit withdrawal requests.</p>
      </header>
      </div>

      <br/><br/>
      
            <div className="vipcolour">
      <section className="vipaccount-fast-easy">
        <h2>FAST & EASY WITHDRAWALS</h2>
        <p>
          It is quick and easy to withdraw funds from your Oslo Capitals trading account via our Secure Client Portal.
          Funds can be withdrawn using a wide range of funding methods including credit card, debit card, payment wallets
          including Neteller and Skrill, online banking, and bank wire transfer.
        </p>
      </section>

      <br/><br/><br/>

        
      <section className="vipaccount-features">
        <div className="vipaccount-feature">
            <br/>
            <i class="fa-solid fa-user"></i>
            <br/>
          <h3>HASSLE-FREE WITHDRAWALS</h3>
          <p>Withdraw your money using a wide range of payment options, including cards, e-wallets like Neteller and Skrill, online banking, or wire transfers</p>
        </div>
        <div className="vipaccount-feature">
            <br/>
            <i class="fa-solid fa-rocket"></i>
        <br/>
          <h3>TOP-LEVEL SECURITY</h3>
          <p>Rest assured, your funds and transactions are fully protected with our industry-leading security protocols. Withdraw with confidence, knowing that your money is safe and secure at every step</p>
        </div>
        <div className="vipaccount-feature">
            <br/>
            <i class="fa-solid fa-compass"></i>
            <br/>
          <h3>GLOBAL ACCESSIBILITY</h3>
          <p>With a wide range of international payment methods, your withdrawals are always within reach, whenever you need them.</p>
        </div>
      </section>
      </div>
      {/* <br/><br/> */}


        <div className="vipaccountsection">
        <h2>Submit Withdraw</h2><br/>
      <section className="vipaccount-form-container">
        
        <form className="vipaccount-form">
          <div className="vipaccount-form-group">
            <h3 id="personal">Personal Details</h3>
            <label>Full Name *</label>
            <input type="text" placeholder="Type your full name" required />
          </div>
          <div className="vipaccount-form-group">
            <label>Contact Number *</label>
            <input type="text" placeholder="Type contact number" required />
          </div>
          <div className="vipaccount-form-group">
            <label>Email Address *</label>
            <input type="email" placeholder="Type email address" required />
          </div>
          <div className="vipaccount-form-group">
            <label>Meta Trader 5 Account No *</label>
            <input type="text" placeholder="Type Meta Trader account number" required />
          </div>
          <h3 id="personal">Bank Account Details</h3>
          <div className="vipaccount-form-group">
            <label>Bank Name *</label>
            <input type="text" placeholder="Type bank name" required />
          </div>
          <div className="vipaccount-form-group">
            <label>Account Number *</label>
            <input type="text" placeholder="Type account number" required />
          </div>
          <div className="vipaccount-form-group">
            <label>Swift Code</label>
            <input type="text" placeholder="Type swift code" />
          </div>
          <div className="vipaccount-form-group">
            <label>IBAN IFSC Code *</label>
            <input type="text" placeholder="Type IBAN IFSC code" required />
          </div>
          <div className="vipaccount-form-group">
            <label>Amount ($) *</label>
            <input type="text" placeholder="Type amount in Dollar ($)" required />
          </div><br/>
          <button type="submit" className="vipaccount-submit-button">Submit</button>
        </form>
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

    </div>
  );
};

export default VipAccountWithdraw;
