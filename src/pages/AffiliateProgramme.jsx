import React from "react";
import "../style/AffuliateProgramme.css";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChartLine, FaCoins, FaLeaf, FaFileInvoice, FaBoxOpen, FaChartBar } from "react-icons/fa";

const AffiliateProgramme = () => {
  return (
    <div className="multi-container">
      {/* Header Section */}
      <header className="multi-header">
        <div className="multi-header-content">
          <h1>Affiliate Programme</h1>
          <p>
            <b>Partner with one of the world's top Forex & CFDs brokers and earn up to $1000 USD
             <br/>commission per each qualified client.</b>
          </p>

         </div>
      </header>



      <section className="funding-secure">
        <h2>What is Extrede Affiliates</h2>
        <p>
        Extrede Affiliates is an easy way to turn your traffic into extra income. Our lucrative programme gives you the opportunity to refer your customers to Extrede in exchange for commission. You can earn up to $1000 USD CPA per qualified client, plus a 10% commission on Sub-Affiliate earnings if you become a Master Affiliate.
        </p>
      </section>


<section  className="intro-container">

  <div id="aff" className="intoduction1">
      <div id="intocontent" className="intro-content">
        <h2 id="affhead" className="intro-heading">Start earning today</h2>
       
        
        <Link to="/affiliate-programme" className="multi-button">
              Contact Us →
          </Link>
      </div>

      <div className="intro-features">
        <div className="intro-feature">
        <div className="icontext">
          <span className="intro-icon">📈</span>
          <div>
            <h4 className="intro-feature-title">$1000 CPA Premium package</h4>
            <p className="intro-feature-text">Earn up to $1000 USD CPA per qualified client*.</p>
          </div>
          </div>
        </div>

       

        <div className="intro-feature">
        <div className="icontext">
          <span className="intro-icon">📊</span>
          <div>
            <h4 className="intro-feature-title">10% Sub-Affiliate commission</h4>
            <p className="intro-feature-text">Become a Master Affiliate and receive a flat 10% commission on all of your Sub-Affiliates’ earnings.</p>
          </div>
          </div>
        </div>

      </div>

      </div>

      <div id="intro-badges" className="intro-badges">
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
      <section className="multi-steps">
        <h2>Become a Partner in 3 Simple Steps</h2>
        <p>Embark on a journey with our Partner Programs, crafted exclusively for your benefit. Expand your financial horizons like never before.</p>
        <p id="intropara">Over 102,000 partners have already joined!</p>
        <div className="multi-step-head">
        <div className="multi-step">
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
        <div className="multi-step">
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
        <div className="multi-step">
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
        {/* <button className="multi-button">Become Our Partner</button> */}
        <Link to="/affiliate-programme" className="multi-button">
        Become Our Partner
        </Link>
      </section>

    </div>
  );
};

export default AffiliateProgramme;
