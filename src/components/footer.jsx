


import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css"

const Footer = ({ isMiddle }) => {
  return (
    <footer id="footer" className={isMiddle ? "footer-middle" : "footer-bottom"}>
      <div className="footer-container">
        <br/><br/>
        <h2> EXTREDE LLC</h2>
        <p>
          With 12 years team experience, ExtredeLLC is one of the most
          secure, fast and trustworthy trading platforms in the industry.
        </p>



          <div className="footer-sections">
            <div className="footer-column">
              <h3>ABOUT US</h3>
              <ul>
              <li ><Link to="/about" id="link"><i class="fa-solid fa-greater-than"></i> Company</Link></li>
              <li ><Link to="/regulation" id="link"><i class="fa-solid fa-greater-than"></i> Regulation</Link></li>
              <li ><Link to="/office-location" id="link"><i class="fa-solid fa-greater-than"></i> Our Worldwide Office</Link></li>
              <li ><Link to="/Partner-trade" id="link"><i class="fa-solid fa-greater-than"></i> Our Trading Partner</Link></li>
              <li ><Link to="/trading-server" id="link"><i class="fa-solid fa-greater-than"></i> Our Trading Servers</Link></li>
                
              </ul>
            </div>

            <div className="footer-column">
              <h3>TRADING</h3>


              
              <ul>

                <li ><Link to="/accounttype" id="link"><i class="fa-solid fa-greater-than"></i> Trading account types</Link></li>
                  <li><Link to="/funding" id="link"><i class="fa-solid fa-greater-than"></i> Account Deposit</Link></li>
                
                 <li><Link to="/withdraw" id="link"><i class="fa-solid fa-greater-than"></i> Withdrawal </Link></li>
               


                  <li><Link to="/margin-and-leverage" id="link"><i class="fa-solid fa-greater-than"></i>  Margin & Leverage</Link></li>
                 <li><Link to="/over-night" id="link"><i class="fa-solid fa-greater-than"></i>  Overnight Positions</Link></li>

              </ul>
            </div>

            <div className="footer-column">
              <h3>TOOLS</h3>
              <ul>
                <li><Link to="/Eco-Calender"id="link"><i class="fa-solid fa-greater-than"></i>Economic Calendar</Link></li>
                {/* <li><a href="/"id="link"><i class="fa-solid fa-greater-than"></i> Forex Sentiment</a></li>      */}
                <li><Link to="/sharecfd"id="link"><i class="fa-solid fa-greater-than"></i> Live Market News</Link></li>
                <li><Link to="/trade-of-the-weak"id="link"><i class="fa-solid fa-greater-than"></i> Trade of the weak</Link></li>
                <li><Link to="/holiday"id="link"><i class="fa-solid fa-greater-than"></i> Holidays Calendar</Link></li>         
               <li><Link to="/trading-hours"id="link"><i class="fa-solid fa-greater-than"></i>  Trading Hours</Link></li>
              </ul>
            </div>

            {/* <div className="footer-column">
              <h3>IMPORTANT</h3>
              <ul>
                <li>Fund Protection</li>
                <li>Our Insurance Program</li>
                <li>Invest Responsibly</li>
                <li>Legal Documents</li>
                <li>Govt.UK License Visit</li>
              </ul>
            </div> */}

            {/* App buttons parallel to the list */}
            <div className="app-buttons">
              <img src="/images/app.png" alt="Google Play" />
              <img src="/images/app.png" alt="App Store" />
              {/* <img src="/images/app.png" alt="Windows Download" /> */}
            </div>
          </div>

          <hr/>

          <div className="footerlogo">
            <img src="/images/unicef.png" alt="footerlogo"/>
            <img src="/images/meta.png"alt="footerlogo"/>
            <img src="/images/inv.png"alt="footerlogo"/>
            <img src="/images/unicef.png"alt="footerlogo"/>
            <img src="/images/meta.png"alt="footerlogo"/>
            <img src="/images/inv.png"alt="footerlogo"/>
          </div>
       

        <div id="insurance1" className="insurance">
          <div className="insurance-box">
            <img src="/images/log.jpg" alt="Insurance Logo" />
            <p>
              <strong>Our Civil Liability Insurance Programme</strong>
              <br />
              Our Civil Liability Insurance Programme can provide compensation
              under a claim of financial loss made against Extrede Capitals LLC{" "}
              <strong>
                as a result of error, omission, negligence, fraud, or failure to
                perform our activities or services for a value of up to £5
                million.
              </strong>{" "}
              The programme is underwritten by Lloyd’s of London, Read more.
            </p>
          </div>
        </div>

        <p className="company-info">
          <strong>Extrede LLC</strong> is a financial brokerage company
          regulated by Financial Conduct Authority (registration no. SEO389),
          Cyprus Securities and Exchange Commission (licence no. 182/015), the
          Central Bank of Curaçao and Sint Maarten (license no. 000210N).
        </p>

        <p className="risk-warning">
          <strong>Risk Warning:</strong> There is a high level of risk involved
          when trading leveraged products such as CFDs. 79.43% of retail
          investor accounts lose money when trading CFDs with this provider.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
