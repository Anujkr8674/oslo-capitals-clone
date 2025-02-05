

import React from "react";
import "../style/RoboTrading.css";

const RoboTrading = () => {
  return (
    <div className="robo-container">
      {/* Hero Section */}
      <section className="robo-hero-section">
        <div className="roboimg">
          <div className="robotext">
          <h1>Robo Trading</h1>
          {/* <h2>Robo Trading</h2> */}
          </div>
          <div className="roboimage">
            <img src="/images/robo00.png" alt="robo"/>
          </div>
        </div>
        
        
      </section>

      <br/><br/>

      <div className="decriptionrobo">

      <div className="robodecricption">
      <p className="robo-intro-text">
          Introducing Best Forex Trading Robot EA
        </p>
      <ul>
        <li>He is a strong win power robot. it makes profit quickly and makes the fund growth steady.</li>
        <li>He is based on a large number of price data analysis, real-time scalping system. Get a lot of orders every working day. Make lots of money every day.</li>
        <li>He is an expert adviser developed to run in the MT5. Everyone can use this robot, even without experience.</li>
       
      </ul>
      </div>

      <div className="decriptionroboimg">
        <img src="/images/imgrobologo.png" alt="robologo"/>
      </div>

      </div>
     
      
      {/* Plans Section */}
      <section className="robo-plans-section">
        <h2>Select Best Forex Trading Robot EA</h2>
        <div className="robo-plans-container">
          {plans.map((plan, index) => (
            <div className="robo-plan-card" key={index}>
              <h3>{plan.name}</h3>
              <img src={plan.image} alt={plan.name} className="robo-plan-image" />
              <p className="robo-account-type">{plan.accountType}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

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

const plans = [
  {
    name: "ALFA FX EA",
    // image: "roboimg.png",
    image: "/images/roboimg.png",
    // image:"..",
    accountType: "Trial ($500)",
    features: [
      "Initial Deposit – $1,500",
      "Loss Free 20 Days",
      "Volume – 0.05",
      "Daily 4 Trades",
      "Daily 2% ROI",
    ],
  },
  {
    name: "RUSH FX EA",
    image: "/images/roboimg.png",
    accountType: "Trial ($1,000)",
    features: [
      "Initial Deposit – $2,000",
      "Loss Free 30 Days",
      "Volume – 0.10",
      "Daily 6 Trades",
      "Daily 2.5% ROI",
      "Currency / Commodity",
    ],
  },
  {
    name: "PYRAMID FX EA",
    image: "/images/robo11.png",
    accountType: "Gold Account",
    features: [
      "Initial Deposit – $4,000",
      "Loss Free 35 Days",
      "Volume – 0.10",
      "Daily 9 Trades",
      "Daily 3.5% ROI",
    ],
  },
  {
    name: "ALTABOT EA",
    image: "/images/robo11.png",
    accountType: "Platinum Account",
    features: [
      "Initial Deposit – $6,000",
      "Loss Free 44 Days",
      "Volume – 0.50",
      "Daily 4 Trades",
      "Daily 4%",
    ],
  },
  {
    name: "Advance ALGO",
    image: "/images/robo13.png",
    accountType: "Master Account",
    features: [
      "Initial Deposit – $10,000",
      "Jackpot Trade WK (2) Times",
      "Volume – 0.80",
      "Daily 6 Trades",
      "Daily 6% ROI",
    ],
  },
  {
    name: "EXZULIVA FX EA",
    image: "/images/robo14.png",
    accountType: "Master Account",
    features: [
      "Initial Deposit – $20,000",
      "Jackpot Trade WK (4) Times",
      "Volume – 1.00",
      "Daily 7 Trades",
      "Daily 7% ROI",
    ],
  },
];



export default RoboTrading;

