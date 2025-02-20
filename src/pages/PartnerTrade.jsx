import React from "react";
import "../style/PartnerTrade.css";

const PartnerTrade = () => {
  return (
    <div className="logo-partner">

        <div className="logo-head">
            <h1>Our Trading Partner</h1>
            <p>Extrede nurtures partnerships, driving growth and</p>
            <p>innovation, offering clients rich data and trading solutions.</p>
        </div>

        <section className="funding-secure">
        <h2>List of our partners</h2>
        <p>
        Nurturing symbiotic relationships, Extrede diligently maintains and facilitates collaborations with leading trading partners, fostering mutual growth and innovation to give our clients a wide range of data resources and trading solutions to choose from.
        </p>
      </section>


    <div className="partner-trade-container">
      <div className="partner-trade-tag">Cellxpert Collaboration</div>
      <h1 className="partner-trade-title">Cellxpert</h1>
      <p className="partner-trade-description">
        Empowered by Cellxpert collaboration, we deliver avant-garde marketing tools to our CPA Partners. The unified platform streamlines ad serving, conversion tracking, campaign management, and optimisation. Paired with our reputable brand and refined marketing materials, CPA Partners access a productivity boost and substantial revenue growth.
      </p>
      <div className="partner-trade-logo">
        <img id="logo1" src="images\partner3.png" alt="Cellxpert Logo" />
      </div>
      </div>


        <br/><br/><br/>
    <div className="partner-trade-container">
      <div className="partner-trade-tag">Premier Forex Platform Provide</div>
      <h1 className="partner-trade-title">MetaQoutes</h1>
      <p className="partner-trade-description">
      Since 2000, MetaQuotes Software Corp reigns as a premier Forex platform provider with the acclaimed MetaTrader 4. Renowned for powering brokers, banks, and exchanges, our collaboration grants clients unmatched access to MT4 trading through Oslo Capital's swift and reliable server setup.
      </p>
      <div className="partner-trade-logo">
        <img id="logo1" src="images\partner2.png" alt="Cellxpert Logo" />
      </div>
      </div>
      <br/><br/><br/>
    

      <div className="partner-trade-container">
      <div className="partner-trade-tag">Trading Tools Provider</div>
      <h1 className="partner-trade-title">Trading Central</h1>
      <p className="partner-trade-description">
      Trading Central blends chartist analysis, mathematical indicators, and Forex signals for directional insights. Managed by a team of experts, its award-winning, clear methodology aids trading signal execution across asset classes. Trusted by elite financial institutions, Trading Central's qualitative research elevates the global trading discipline.
     </p>
      <div className="partner-trade-logo">
        <img id="logo1" src="images\partner1.png" alt="Cellxpert Logo" />
      </div>
      </div>



      <div className="design-slider-container" id="design-main-slider">
        <h1>Our Liquidity Partners</h1>
      <div className="design-slider design-top" id="design-top-slider">
        <img src="/images/part111.png" alt="Logo 1" className="design-logo" id="design-logo-1" />
        <img src="/images/part12.png"  alt="Logo 2" className="design-logo" id="design-logo-2" />
        <img src="/images/part13.png"  alt="Logo 3" className="design-logo" id="design-logo-3" />
        <img src="/images/part14.png"  alt="Logo 3" className="design-logo" id="design-logo-3" />
        <img src="/images/part15.png"  alt="Logo 3" className="design-logo" id="design-logo-3" />
      </div>
      <br/><br/>
      <div className="design-slider design-bottom" id="design-bottom-slider">
        <img src="/images/part16.png" alt="Logo 4" className="design-logo" id="design-logo-4" />
        <img src="/images/part17.png" alt="Logo 5" className="design-logo" id="design-logo-5" />
        <img src="/images/part18.png" alt="Logo 6" className="design-logo" id="design-logo-6" />
        <img src="/images/part19.png" alt="Logo 6" className="design-logo" id="design-logo-6" />
        <img src="/images/part20.png" alt="Logo 6" className="design-logo" id="design-logo-6" />
      </div>
    </div>
        

    </div>

    
  );
};

export default PartnerTrade;
