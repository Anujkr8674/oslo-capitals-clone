import React from "react";
// import "./AccountTypes.css";
import "../style/AccountTypes.css"

const AccountTypes = () => {
  return (
    <div className="account-types">
      {/* Header Section */}
      <header className="header-section">
        <h1>Account Types</h1>
        {/* <button>Open an Acc</button> */}
        <p>We offers a wide range of account types,so you can open a trading<br/>
        account that suits your investment needs.</p>
        <button>Check Account Type</button>
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

      <br />

      {/* Partner Logos Section */}
      <section className="partners">
        <div className="partner-logos">
          <img src="/images/astro.jpg" alt="Bloomberg" />
          <img src="/images/citi.png" alt="Yahoo Finance" />
          <img src="/images/astro.jpg" alt="Investing.com" />
          <img src="/images/citi.png" alt="Awards" />
        </div>
      </section>

      <div className="new-section">
        <h2>Award Winning Platform & Services</h2>
        
        <div className="benefits-container">
          <div className="benefit-box">
            {/* <i className="fa-solid fa-shield-alt"></i> */}
            <img src="/images/aw4.png" alt="cover pic" />
            <p>Best Online Broker for<br/> Advanced Traders</p>
          </div>
          <div className="benefit-box">
          <img src="/images/aw1.png" alt="cover pic" />
            <p>Best Online Broker</p>
          </div>
          <div className="benefit-box">
          <img src="/images/book.png" alt="cover pic" />
            <p>#1 Best Online Broker 5<br/> out of 5 stars</p>
          </div>

          <div className="benefit-box">
          <img src="/images/aw2.png" alt="cover pic" />
            <p>Best for Advanced <br/> Traders</p>
          </div>

          <div className="benefit-box">
          <img src="/images/aw3.png" alt="cover pic" />
            <p>#1 International Trading</p>
          </div>
        </div>
        <br/><br/>
        <button className="btn"><i class="fa-solid fa-trophy"></i>SEE ALL REWARDS</button>
      </div>

      {/* Trading Account Comparison */}
      <section className="account-comparison">
        <h2>Trading Account Comparison</h2>
        <div className="account-plans">
          <div className="plan starter">
            <h3>Starter FX Account</h3>
            <p>Designed for new traders, the StarterFX Account features low deposits and educational resources to build your confidence in the Forex market.</p>
            <p>$200</p>
            <button>Start Trading</button>
            <hr/>
            <h4>Currency</h4>
            <p>USD, EUR, GBP, JPY, CHF,‎ AUD, HUF, PLN, SGD, ZAR</p><br/>
            <h4>Leverage</h4>
            <p>Up to 400:1**</p><br/>
            <h4>Competitive Spreads</h4>
            <p>From 2 pipes</p><br/>
            <h4>Safety Net</h4>
            <p>You have negative balance protection, safeguarding your account</p><br/>
            <h4>No Commissions</h4>
            <p><b>Zero Commissions -</b> Keep more of your profits</p><br/>
            <h4>Hedging Flexibility</h4>
            <p>Diversify and manage your risks effectively.</p><br/>
            <h4>Multi-Platform Trading</h4>
            <p>Available on Desktop, Android, and iOS</p><br/>
            <h4>Margin Call</h4>
            <p>Margin call level at 60%</p><br/>
            <h4>stop-out level</h4>
            <p>Stop-out level at 85%.</p><br/>
            <h4>Islamic Account</h4>
            <p>Benefit from competitive swap rates, or opt for a <b>Sharia-compliant Islamic account if you prefer.</b></p><br/>
            <h4>
            Scalping Restrictions</h4>
            <p><b>Scalping is not allowed</b>, ensuring a stable and fair trading environment</p><br/>
            <h4>Comprehensive Training</h4>
            <p>Enhance your trading skills with our <b>professional training resources,</b> designed to help you succeed.</p><br/>
            <h4>Profit Potential</h4>
            <p>Capitalize on market opportunities with the <b>potential to earn profits of up to 10%</b></p><br/>
           
          </div>
          <div className="plan beginner">
            <h3>Beginner FX Account</h3>
            <p>Perfect for experienced traders, the GrowthFX Account offers advanced tools, tighter spreads, and moderate leverage to help you sharpen your strategies</p>
            <p>$1,000</p>
            <button>Start Trading</button>
            <hr/>
            <h4>Currency</h4>
            <p>USD, EUR, GBP, JPY, CHF,‎ AUD, HUF, PLN, SGD, ZAR</p><br/>
            <h4>Leverage</h4>
            <p>Up to 400:1**</p><br/>
            <h4>Competitive Spreads</h4>
            <p>From 2 pipes</p><br/>
            <h4>Safety Net</h4>
            <p>You have negative balance protection, safeguarding your account</p><br/>
            <h4>No Commissions</h4>
            <p><b>Zero Commissions -</b> Keep more of your profits</p><br/>
            <h4>Hedging Flexibility</h4>
            <p>Diversify and manage your risks effectively.</p><br/>
            <h4>Multi-Platform Trading</h4>
            <p>Available on Desktop, Android, and iOS</p><br/>
            <h4>Margin Call</h4>
            <p>Margin call level at 60%</p><br/>
            <h4>stop-out level</h4>
            <p>Stop-out level at 85%.</p><br/>
            <h4>Islamic Account</h4>
            <p>Benefit from competitive swap rates, or opt for a <b>Sharia-compliant Islamic account if you prefer.</b></p><br/>
            <h4>
            Scalping Restrictions</h4>
            <p><b>Scalping is not allowed</b>, ensuring a stable and fair trading environment</p><br/>
            <h4>Comprehensive Training</h4>
            <p>Enhance your trading skills with our <b>professional training resources,</b> designed to help you succeed.</p><br/>
            <h4>Profit Potential</h4>
            <p>Capitalize on market opportunities with the <b>potential to earn profits of up to 10%</b></p><br/>
           
            
          </div>
          <div className="plan advanced">
            <h3>Advanced FX Account</h3>
            <p>Offers competitive spreads, advanced tools, increased leverage, and enhanced safety features, empowering you to trade with precision, control, and profit potential.</p>
            <p>$5,000</p>
            <button>Start Trading</button>
            <hr/>
            <h4>Currency</h4>
            <p>USD, EUR, GBP, JPY, CHF,‎ AUD, HUF, PLN, SGD, ZAR</p><br/>
            <h4>Leverage</h4>
            <p>Up to 400:1**</p><br/>
            <h4>Competitive Spreads</h4>
            <p>From 2 pipes</p><br/>
            <h4>Safety Net</h4>
            <p>You have negative balance protection, safeguarding your account</p><br/>
            <h4>No Commissions</h4>
            <p><b>Zero Commissions -</b> Keep more of your profits</p><br/>
            <h4>Hedging Flexibility</h4>
            <p>Diversify and manage your risks effectively.</p><br/>
            <h4>Multi-Platform Trading</h4>
            <p>Available on Desktop, Android, and iOS</p><br/>
            <h4>Margin Call</h4>
            <p>Margin call level at 60%</p><br/>
            <h4>stop-out level</h4>
            <p>Stop-out level at 85%.</p><br/>
            <h4>Islamic Account</h4>
            <p>Benefit from competitive swap rates, or opt for a <b>Sharia-compliant Islamic account if you prefer.</b></p><br/>
            <h4>
            Scalping Restrictions</h4>
            <p><b>Scalping is not allowed</b>, ensuring a stable and fair trading environment</p><br/>
            <h4>Comprehensive Training</h4>
            <p>Enhance your trading skills with our <b>professional training resources,</b> designed to help you succeed.</p><br/>
            <h4>Profit Potential</h4>
            <p>Capitalize on market opportunities with the <b>potential to earn profits of up to 10%</b></p><br/>
           
          </div>
          <div className="plan pro">
            <h3>Pro FX Account</h3>
            <p>Crafted for professional traders, the ProFX Account delivers institutional-grade features, offering unparalleled trading power and flexibility.</p>
            <p>$10,000</p>
            <button>Start Trading</button>
            <hr/>
            <h4>Currency</h4>
            <p>USD, EUR, GBP, JPY, CHF,‎ AUD, HUF, PLN, SGD, ZAR</p><br/>
            <h4>Leverage</h4>
            <p>Up to 400:1**</p><br/>
            <h4>Competitive Spreads</h4>
            <p>From 2 pipes</p><br/>
            <h4>Safety Net</h4>
            <p>You have negative balance protection, safeguarding your account</p><br/>
            <h4>No Commissions</h4>
            <p><b>Zero Commissions -</b> Keep more of your profits</p><br/>
            <h4>Hedging Flexibility</h4>
            <p>Diversify and manage your risks effectively.</p><br/>
            <h4>Multi-Platform Trading</h4>
            <p>Available on Desktop, Android, and iOS</p><br/>
            <h4>Margin Call</h4>
            <p>Margin call level at 60%</p><br/>
            <h4>stop-out level</h4>
            <p>Stop-out level at 85%.</p><br/>
            <h4>Islamic Account</h4>
            <p>Benefit from competitive swap rates, or opt for a <b>Sharia-compliant Islamic account if you prefer.</b></p><br/>
            <h4>
            Scalping Restrictions</h4>
            <p><b>Scalping is not allowed</b>, ensuring a stable and fair trading environment</p><br/>
            <h4>Comprehensive Training</h4>
            <p>Enhance your trading skills with our <b>professional training resources,</b> designed to help you succeed.</p><br/>
            <h4>Profit Potential</h4>
            <p>Capitalize on market opportunities with the <b>potential to earn profits of up to 10%</b></p><br/>
          </div>
          <div className="plan vip">
            <h3>VIP FX Account</h3>
            <p>Tailored for expert traders, the VIP FX Account offers personalized support—crafted for those who demand the highest trading performance and results</p>
            <p>$20,000</p>
            <button>Start Trading</button>
            <hr/>
            <h4>Currency</h4>
            <p>USD, EUR, GBP, JPY, CHF,‎ AUD, HUF, PLN, SGD, ZAR</p><br/>
            <h4>Leverage</h4>
            <p>Up to 400:1**</p><br/>
            <h4>Competitive Spreads</h4>
            <p>From 2 pipes</p><br/>
            <h4>Safety Net</h4>
            <p>You have negative balance protection, safeguarding your account</p><br/>
            <h4>No Commissions</h4>
            <p><b>Zero Commissions -</b> Keep more of your profits</p><br/>
            <h4>Hedging Flexibility</h4>
            <p>Diversify and manage your risks effectively.</p><br/>
            <h4>Multi-Platform Trading</h4>
            <p>Available on Desktop, Android, and iOS</p><br/>
            <h4>Margin Call</h4>
            <p>Margin call level at 60%</p><br/>
            <h4>stop-out level</h4>
            <p>Stop-out level at 85%.</p><br/>
            <h4>Islamic Account</h4>
            <p>Benefit from competitive swap rates, or opt for a <b>Sharia-compliant Islamic account if you prefer.</b></p><br/>
            <h4>
            Scalping Restrictions</h4>
            <p><b>Scalping is not allowed</b>, ensuring a stable and fair trading environment</p><br/>
            <h4>Comprehensive Training</h4>
            <p>Enhance your trading skills with our <b>professional training resources,</b> designed to help you succeed.</p><br/>
            <h4>Profit Potential</h4>
            <p>Capitalize on market opportunities with the <b>potential to earn profits of up to 10%</b></p><br/>
           
          </div>
        </div>

        <div className="imp">
          <p>Important Information*</p>
          <ul>
            <li>*The table indicates approximate spreads; refer to the client terminal for actual spread values.</li>
            <li>*Spreads may widen during the Midnight session (8 pm-6 am, GMT), with variations for certain products.</li>
            <li>*Fixed spreads during the Midnight session (8 pm-6 am, GMT) may experience widening.</li>
          </ul>
          <p>**Only for certain products.</p>
        </div>
      </section>










      {/* safty is priopty */}


      <div className="imgtext">

      <div className="img1">
          <img src="/images/girl.jpeg" alt="girl"/>
            </div>
        

        <div className="text">
          <p id="p">You are safe with us.</p>
          
          <h1  className="h1">Your safety is our priority
          </h1 >
          <p>We protect your privacy with advanced security measures, ensuring your funds and payments are safe. With our negative balance protection, you can trade with confidence.</p>
          <br/>
          <div id="rest11" className="rest1">
           

            <div className="para">
            <i class="fa-solid fa-check"></i>
            
              <p>Client’s funds<br/> protection</p>
            </div>

            <div className="para">
            <i class="fa-regular fa-eye"></i>
              <p>Privacy protection</p>
            </div>

            <div className="para">
            <i class="fa-solid fa-handshake-angle"></i>
              <p>Advanced data <br/>protection</p>
            </div>

            <div className="para">
            <i class="fa-solid fa-lock"></i>
              <p>International <br/>Security Standard</p>
            </div>
            
           
          </div>
          </div>
          </div>







          


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

      {/* Negative Balance Protection */}
      <div className="neg">
      <section className="negative-balance-protection">
        <h2>Negative Balance Protection</h2>
        {/* <p>We ensure that traders cannot lose more than their available balance.</p> */}
      <p>Trade confidently knowing you won’t owe your broker money; we prevent losses from exceeding your balance across all trading account types.</p>
      </section>

      {/* Stop Out Protection */}
      <section className="negative-balance-protection">
        <h2>Stop Out Protection</h2>
        {/* <p>Our stop-out mechanism ensures that you do not experience excessive losses.</p> */}
      <p>Enjoy this unique secure trading protection feature that strengthens your positions and helps delay or avoid stop outs, particularly </p>
      </section>

      </div>

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

export default AccountTypes;
