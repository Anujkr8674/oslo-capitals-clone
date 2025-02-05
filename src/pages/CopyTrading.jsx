import React from 'react';

import "../style/CopyTrading.css";

const CopyTrading = () => {
  return (
    <div className="copy-trading-container">
      <section className="hero-section1">
        <div className="hero-content1">
            <div className="hero-content1text">
                <h1>Copy-Trading Platform</h1>
                <p>Earn Up to 50% Profit Share from Your
                    StrategiesYou don’t need to be an expert to
                    earn like one. Or spend hours in front of the
                    charts. At least, not anymore! Just follow the
                    experts and copy their trades or get up to 50%
                    profit share* by sharing your own strategies
                    for others to follow!
                </p>
            </div>

            <div className="hero-content1img">
                <img src='/images/copyimg1.png' alt='header for copy trading'/>
            </div>
          
        </div>
      </section>

      <section className="confidence-section">
        <div className="confidence-content">
            <div className="confidence-contenttext">
                <h2>Copy the Best and Trade with Confidence</h2>
                <p>Oslo Copy Trading allows traders to replicate the
                    performance of the platform’s top earning
                    investors. With this tool, you’ll be able to follow and
                    automatically copy high-return portfolios, in just a
                    few clicks. So whatever your investing goals, Oslo
                    Copy Trading can help you save valuable time and
                    help you grow passive income – even if you don’t
                    have previous trading experience.
                </p>
            </div>

            <div className="confidence-contentimg">
                <img src='/images/copyimg2.png' alt='for copy trading'/>
            </div>
        
        </div>
      </section>

      <section className="features-section">
        <div className="features">
            <div className="features1">
                <span><i class="fa-solid fa-bars"></i> An easy-to-use and free trading tool</span>
                <span><i class="fa-solid fa-hand"></i> No need to spend hours training or working on trades</span>
            </div>

            <div className="features2">
                <span><i class="fa-solid fa-laptop"></i> An entirely customisable trading experience: diversify your portfolio by copying trades in a variety of markets</span>
                <span><i class="fa-solid fa-laptop"></i> An inclusive platform: no need for extensive trading knowledge or experience</span>
            </div>

            <div className="features3">
                
            <span><i class="fa-solid fa-laptop"></i> A team of Oslo professionals at your service to help you along the way</span>
            </div>
          
        
        </div>
      </section>

      <section className="highlight-section">

        <div className="highlight-section1">
            <div className="highlight-section1img">
                <img src='/images/copyimg3.png' alt='for copy trading'/>
            </div>
            <div className="highlight-section1text">
                <button>Talk to customer</button>
                <h2>Highlight Features of extrede Copy Trading</h2>
                <ul>
                    <li>01 <strong> Save Time:</strong> A time-saving way to earn passive income</li>
                    <li>02 <strong> Intuitive:</strong> An easy and intuitive platform, open to all</li>
                    <li>03 <strong> Optimal:</strong> Seamless and optimised order execution</li>
                    <li>04 <strong> Control:</strong> Total control over your trades and strategy</li>
                </ul>
            </div>

            
        </div>
        
      </section>

      <section className="mandates-section">
        <h2 id='mandatehead'>Regulation Copy Trading Mandates</h2>
        <div className="mandates">
          <div id='left' className="mandate">
            <h3>Oslo Copy Trading for Copier</h3>
            <p> As a Copier, you will gain instant access to our network of hundreds of successful investors from all around the world. You can then learn from their past experience and discover what they invest in, what their returns are, the type of account they hold and more. Whatever your objectives, you are bound to find a copying opportunity that will suit you.
                To get started, you’ll simply need to log into your MT4 account, identify the portfolio(s) you wish to replicate and then select “Copy”. From there, you’ll be able to monitor your trades and pause or edit your investments at any time.
            </p>
          </div>
          <div id='right' className="mandate">
            <h3>Oslo Copy Trading for Trader</h3>
            <p> Are you an experienced trader with a successful investing record? In that case, becoming a Oslo Top Trader could allow you to earn passive income. Indeed, as a Top Trader, you get paid every time an investor replicates your portfolio. In order to be eligible, on top of your previous experience, you also need to possess an MT4 account with gains of at least 5% and a transaction history of at least 3 months.

            </p>
          </div>
        </div>
      </section>
      <br/><br/>

      {/* Protection Steps */}

      <div id="step11">
      <section className="protection-steps">
        <h2>Take Steps to Protect Yourself</h2>
        <hr/>
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
     

    </div>
  );
};

export default CopyTrading;
