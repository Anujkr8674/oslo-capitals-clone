import React from "react";
import "../style/IntroductionBroker.css";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChartLine, FaCoins, FaLeaf, FaFileInvoice, FaBoxOpen, FaChartBar } from "react-icons/fa";

const IntroductionBroker = () => {
  return (
    <div className="introduction-container">
      {/* Header Section */}
      <header className="introduction-header">
        <div className="introduction-header-content">
          <h1>Introducing Broker (IB) Program</h1>
          <p>
            Join our Introducing Broker partner program to boost your income.
            Whether you are an individual or own a business, enjoy
            best-in-class opportunities and grow with a leader in the trading
            industry.
          </p>

          <Link to="/introduction-broker" className="introduction-button">
              Become Our Partner
          </Link>
          {/* <button className="introduction-button">Become Our Partner</button> */}
        </div>
      </header>



      <section className="comm-best-platform">
      {/* <h2>What is Commodities Trading?</h2> */}
        <div id="intro" className="content1">
            <div className="image-container">
                <img src="/images/final1.png" alt="Trading Platform" />
                {/* <img  id="intiimg" src="/images/intro1.png" alt="Trading Platform" /> */}
            </div>
          <div className="text-content1">
           
                <h1 id="introh"> Earnings up to 72% in ommissions</h1>
                <p>Earn up to 72% of the spread and commission from every trade copied by followers or placed by referred traders. As your clients trade more, your reward grow.
                    Enjoy limitless revenue potential and transparent reporting in your Partner Room. Join us and start earning today!</p>


         </div>
          
        </div>
       </section>



        




<section className="intro-container">

  <div className="intoduction1">
      <div id="intocontent" className="intro-content">
        <h2 className="intro-heading">Conditions Designed to Help You Profit More</h2>
        <p className="intro-text">
          Tailored solutions for every partner’s success. Explore our unique trading and marketing benefits.
        </p>
        {/* <button className="intro-button">Contact Us →</button> */}
        <Link to="/introduction-broker" className="introduction-button">
              Contact Us →
          </Link>
      </div>

      <div className="intro-features">
        <div className="intro-feature">
        <div className="icontext">
          <span className="intro-icon">📈</span>
          <div>
            <h4 className="intro-feature-title">Copy Trading</h4>
            <p className="intro-feature-text">Additional income from traders with no experience.</p>
          </div>
          </div>
        </div>

        <div className="intro-feature">
          <div className="icontext">
          <span className="intro-icon">⚙️</span>
          <div>
            <h4 className="intro-feature-title">Marketing Materials</h4>
            <p className="intro-feature-text">Everything you need to promote your service.</p>
          </div>
          </div>
        </div>

        <div className="intro-feature">
        <div className="icontext">
          <span className="intro-icon">📊</span>
          <div>
            <h4 className="intro-feature-title">Partner Strategies</h4>
            <p className="intro-feature-text">A predefined list of automated strategies for traders.</p>
          </div>
          </div>
        </div>

        <div className="intro-feature">
        <div className="icontext">
          <span className="intro-icon">💰</span>
          <div>
            <h4 className="intro-feature-title">Unique Auto-Withdrawal feature</h4>
            <p className="intro-feature-text">Get access to withdraw your fund fast and secure to your account.</p>
          </div>
          </div>
        </div>
      </div>

      </div>

      <div id="#intro-badges" className="intro-badges">
        <span className="intro-badge">Auto-rebate feature for your clients</span>
        <span className="intro-badge">Fast and stable recurring payouts</span><br/>
        <span className="intro-badge">Loyalty Bonus of up to 20% on monthly commission</span>
        <span className="intro-badge">No limits on commission per client</span><br/>
        <span className="intro-badge">Unique Auto-Withdrawal feature</span>
        <span className="intro-badge">Up to $8 from Share4you copy commission per lot</span>
      </div>
    </section>


    <div className="introtextcover">
      <h3>We are a team of trading experts committed to delivering the best IB partnership experience in the global financial markets.</h3>
    </div>







      {/* Partner Steps Section */}
      <section className="introduction-steps">
        <h2>Become a Partner in 3 Simple Steps</h2>
        <p>Embark on a journey with our Partner Programs, crafted exclusively for your benefit. Expand your financial horizons like never before.</p>
        <p id="intropara">Over 102,000 partners have already joined!</p>
        <div className="introduction-step-head">
        <div className="introduction-step">
        <div className="textimg11">
        <div className="introtext">
          <h4>Step 1</h4>
          <h1>Sign up </h1>
          </div>

          <div className="introimg">
              <img src="/images/one.jpg" alt="one"/>
            </div>
            </div>
          <p>and choose from our IB or Multi-level programs.</p>
        </div>
        <div className="introduction-step">
          <div className="textimg11">
            <div className="introtext">
            <h4>Step 2</h4>
            <h1>Refer</h1>
            </div>
            <div className="introimg">
              <img src="/images/two.jpg" alt="one"/>
            </div>
          
          </div>
          <p>Share your unique Partner Link across online channels.</p>
        </div>
        <div className="introduction-step">
        <div className="textimg11">
        <div className="introtext">
          <h4>Step 3</h4>
          <h1>Earn More</h1>
          </div>
            <div className="introimg">
              <img src="/images/three.jpg" alt="one"/>
            </div>
            </div>
          <p>Earn up to 75% revenue and get unlimited payouts.</p>
        </div>
        </div>
        {/* <button className="introduction-button">Become Our Partner</button> */}
        <Link to="/introduction-broker" className="introduction-button">
        Become Our Partner
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="introduction-faq">
        <h2>Frequently Asked Questions</h2>
        <br/><br/>
        <details>
          <summary>What Partnership Programs Are Available at Extrede ?</summary>
          <p>Extrede   offers diverse partnership opportunities, including Introducing Broker and Multi-Level programs, designed to accommodate various partnership styles. Both programs offer competitive commission structures, with the possibility of earning up to 72% in commissions and additional benefits that enhance partnership value</p>
        </details>
        <details>
          <summary>How Do I Join Extrede Partner programe ?</summary>
          <p>Getting started with Extrede   partnership program is a streamlined, three-step process: Sign up, refer clients using your unique referral link, and start earning commissions. You’ll join over 102,000 partners who enjoy unlimited commission potential</p>
        </details>
        <details>
          <summary>Why Choose Extrede Partner Program?</summary>
          <p>Extrede Capital’s partnership programs stand out for their exceptional support, tailored solutions, and robust commission plans. By promoting a trusted and regulated broker with over a decade of industry presence, partners can rely on our reputation and advanced technologies to optimize their success.</p>
          </details>

          <details>
          <summary>What supports do Extrede Partner Recives ?</summary>
          <p>As a Extrede   partner, you’ll receive full support through our extensive selection of marketing materials. We provide customizable banners, landing pages, and other outreach tools, along with exclusive access to VIP events and activities to engage and expand your client base effectively.</p>
          </details>

          <details>
          <summary>What is Extrede Monthly Loyality Program?</summary>
          <p>Partners at Extrede   can earn continuous rewards through our Monthly Loyalty Program. This program provides regular payouts and performance-based escalations, rewarding your ongoing dedication and successful client referrals with higher commission rates.</p>
          </details>
      </section>
    </div>
  );
};

export default IntroductionBroker;
