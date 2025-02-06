


import React from "react";
import "../style/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
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
                <li>Company</li>
                <li>Regulation</li>
                <li>Our Worldwide Office</li>
                <li>Our Trading Partner</li>
                <li>Our Trading Servers</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>TRADING</h3>
              <ul>
                <li>Trading account types</li>
                <li>Account Deposit</li>
                <li>Fund Withdrawal</li>
                <li>Margin & Leverage</li>
                <li>Overnight Positions</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>TOOLS</h3>
              <ul>
                <li>Economic Calendar</li>
                <li>Forex Sentiment</li>
                <li>Live Market News</li>
                <li>Forex Calculators</li>
                <li>Holidays Calendar</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>IMPORTANT</h3>
              <ul>
                <li>Fund Protection</li>
                <li>Our Insurance Program</li>
                <li>Invest Responsibly</li>
                <li>Legal Documents</li>
                <li>Govt.UK License Visit</li>
              </ul>
            </div>

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
       

        <div className="insurance">
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
