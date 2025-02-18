import React from "react";
import "../style/TradeWeakLeaderboard.css";



const TradeWeakLeaderboard = () => {
  return (
    <div className="trade-weak-container ">
        <div className="trade-content">
            <div className="trade-img">
                <img src="/images/timg1.png" alt="timag"/>
            </div>
            <div className="trade-text">
            <img src="/images/trade1.png" alt="timag"/>
            <h1>3 568% Indonesia - Lusiana</h1>
            <p>Total Deposits: 500 USD</p>
            <p>Total Withdrawals : 12 500 USD</p>
            <p>Withdrawals Made : 24x</p>
            <p>Still Active Trader: Yes</p>

            </div>
        </div>
        <br/><br/>
        <div className="trade-content">
            <div className="trade-img">
                <img src="/images/timg2.png" alt="timag"/>
            </div>
            <div className="trade-text">
            <img src="/images/trade2.png" alt="timag"/>
            <h1>2 890% Indonesia - Prastyo</h1>
            <p>Total Deposits: 1000 USD</p>
            <p>Total Withdrawals 17 500 USD</p>
            <p>Withdrawals Made 7x</p>
            <p>Still Active Trader: Yes</p>

            </div>
        </div>

        <br/><br/>
        <div className="trade-content">
            <div className="trade-img">
                <img src="/images/timg3.png" alt="timag"/>
            </div>
            <div className="trade-text">
            <img src="/images/trade3.png" alt="timag"/>
            <h1>1 784% India - Kumar</h1>
            <p>Total Deposits: 2 500 USD</p>
            <p>Total Withdrawals 200 00 USD</p>
            <p>Withdrawals Made : 10x</p>
            <p>Still Active Trader: Yes</p>

            </div>
        </div>

        <hr/>
        <br/><br/><br/>


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

    </div>
  );
};

export default TradeWeakLeaderboard;
