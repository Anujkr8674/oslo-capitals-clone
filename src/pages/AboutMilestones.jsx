import React from "react";
import "../style/AboutMilestones.css";

const milestones = [
  {
    year: "2012",
    title: "Extrede started off in 2012 with the launch, of its founders’ first online trading service under the trademark Extrede.",
    description:
      "Young, energetic and ready to succeed, we worked towards the vision of making a difference in the industry.",
  },
  {
    year: "2013",
    title: "Launched unique 3-level Partner Program.",
  },
  {
    year: "2014",
    title: "Extrede goes global – opening the office in India. Launching free 245 customer support line.",
    description:
      " Number of orders reaches 10 million. Number of active clients reaches the 10,000 mark.",
  },
  {
    year: "2016",
    title: "Volume of closed orders reaches 154.83 billion in units of the base currency.",
    description:
      "Employee count reaches more than 100. The number of total active accounts reached the 100,000 mark.",
  },
  {
    year: "2017",
    title: "Major expansion of trading instruments.",
    description:
      "Trader Room redesign to mobile-friendly user interface. Launched Extrede mobile trading application on iOS and Android. ",
  },
  {
    year: "2018",
    title: "Opened office in Vietnam. Second office in Thailand was opened.",
    description:
      "Received IAIR award – ‘The best Forex broker in South East Asia’.",
  },
  {
    year: "2019",
    title: "Opened a new office to better serve our customers in Hat Yai – Thailand. Held over 50 successful seminars throughout Thailand.",
    description:
      " Opened two new offices to cater to our loyal customers in Hanoi (August 2019), and Danang (Dec 2019).",
  },
  {
    year: "2021",
    title: "We were named the ‘Best Forex Broker, Asia’ by Global Banking & Finance Review.",
    description: "Our partner program was awarded the “Best Forex Affiliate Program” by AtoZ Markets."
  },
];


const milestones1 = [
    {
        year: "2012",
        title: "Extrede started off in 2012 with the launch, of its founders’ first online trading service under the trademark Extrede.",
        description:
          "Young, energetic and ready to succeed, we worked towards the vision of making a difference in the industry.",
      },
      {
        year: "2013",
        title: "Launched unique 3-level Partner Program.",
      },
      {
        year: "2014",
        title: "Extrede goes global – opening the office in India. Launching free 245 customer support line.",
        description:
          " Number of orders reaches 10 million. Number of active clients reaches the 10,000 mark.",
      },
      {
        year: "2016",
        title: "Volume of closed orders reaches 154.83 billion in units of the base currency.",
        description:
          "Employee count reaches more than 100. The number of total active accounts reached the 100,000 mark.",
      },
      {
        year: "2017",
        title: "Major expansion of trading instruments.",
        description:
          "Trader Room redesign to mobile-friendly user interface. Launched Extrede mobile trading application on iOS and Android. ",
      },
      {
        year: "2018",
        title: "Opened office in Vietnam. Second office in Thailand was opened.",
        description:
          "Received IAIR award – ‘The best Forex broker in South East Asia’.",
      },
      {
        year: "2019",
        title: "Opened a new office to better serve our customers in Hat Yai – Thailand. Held over 50 successful seminars throughout Thailand.",
        description:
          " Opened two new offices to cater to our loyal customers in Hanoi (August 2019), and Danang (Dec 2019).",
      },
      {
        year: "2021",
        title: "We were named the ‘Best Forex Broker, Asia’ by Global Banking & Finance Review.",
        description: "Our partner program was awarded the “Best Forex Affiliate Program” by AtoZ Markets."
      },
  ];

const AboutMilestones = () => {
  return (
    <div className="about-container">



<section className="about1-head-container">
      <div className="about1-head-overlay">
        <div className="about1-head-content">
          <h2 className="about1-head-title">ABOUT US</h2>
          <h1 className="about1-head-heading">
            A COMPANY WITH AN INNOVATION PHILOSOPHY
          </h1>
          <p className="about1-head-description">
            Our vision is to contribute to the global change in the online
            trading industry — bringing more transparency and making trading
            truly accessible to all.
          </p>
          <div className="about1-head-stats">
            <div className="about1-head-stat">
              <h3>2 m</h3>
              <p>Trading accounts opened</p>
            </div>
            <div className="about1-head-stat">
              <h3>1.4 b</h3>
              <p>Orders executed</p>
            </div>
            <div className="about1-head-stat">
              <h3>60+</h3>
              <p>Industry awards</p>
            </div>
            <div className="about1-head-stat">
              <h3>40+</h3>
              <p>Languages supported</p>
            </div>
            <div className="about1-head-stat">
              <h3>12</h3>
              <p>Years in the market</p>
            </div>
          </div>
        </div>
      </div>
    </section>
<br/><br/><br/>

    <div className="imgtext">
        <div className="img1">
          <img src="/images/man.jpg" alt="man "/>
          <div className="overlay-text"><b className="b">12</b> Years of<br/><span className="span">Experience </span> </div>
        </div>

        <div className="text">
          
          
          <h3><b>Extrede – Everyone’s
            Trusted CFD Broker</b>
          </h3>
          <p>One of the world's leading CFD brokers with over 12 years of market
            experience, Extrede Capitals provides traders a CFD trading platform with
            access to 1,000+ CFD products, including forex, indices, commodities,
            shares, ETFs, and even bonds.Trade CFDs with ease on desktop or mobile
            using our variety of advanced trading tools and features from your home
            country, whether you are from Thailand, Philippines or beyond.
          </p>
          <div className="rest">
           

            <div className="para">
              <h3>2012</h3>
              <p>ESTABLISH</p>
            </div>

            <div className="para">
              <h3>60+</h3>
              <p>Awards and<br/> counting</p>
            </div>

            <div className="para">
              <h3>+2M</h3>
              <p>Trading accounts<br/> opened</p>
            </div>

            <div className="para">
              <h3>110+</h3>
              <p>countries across<br/> the world</p>
            </div>
            
           
          </div>
        </div>

      </div>


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


      <div className="regtext">
      <div className="regulation-cards">
        <div className="regulation-card">
        <img id="regimg" src="/images/reg4.png"alt="step1"/><br/><br/>
          <p id="regpara"><b>Financial Services Authority  (FSA)</b></p><hr/>
          <p>FSA is the autonomous regulatory body responsible to license, regulate, enforce regulatory and compliance requirements, monitor and supervise the conduct of business in the non-bank financial services sector in Seychelles.</p>
          <p>Extrede LLC is a Securities Dealer authorized and regulated by the Seychelles Financial Services Authority (FSA) with license number SE0389.</p>
          <p>Extrede LLC operates under this website for the provision of services to selected jurisdictions outside the European Economic Area (EEA).</p>
        </div>
        <div className="regulation-card">
        <img id="regimg" src="/images/reg2.png"alt="step1"/><br/><br/>
          <p id="regpara"><b>Central Bank of Curaçao and Sint Maarten (CBCS)</b></p>
          <hr/>
          <p>Extrede B.V. is a Securities Intermediary authorized and regulated by the Central Bank of Curaçao and Sint Maarten with license number 0002ION.</p>
          <p>The Central Bank of Curaçao and Sint Maarten supervises the financial sector of the countries Curaçao and Sint Maarten to primarily promote the stability, integrity, efficiency, safety, and soundness of this sector.</p>
          <p>Extrede B.V. operates under this website for the provision of services to selected jurisdictions outside the European Economic Area (EEA).</p>
        </div>
        <div className="regulation-card">
        <img id="regimg" src="/images/reg11.png"alt="step1"/><br/><br/>
          <p id="regpara"><b>Financial Services Commission (FSC)</b></p>
          <hr/>
          <p>Extrede (VG) LLC is authorized by the Financial Services Commission (FSC) in BVI with registration number 2032226 and investment business license number SIBA/M/12/10344.</p>
          <p>The FSC is the Regulatory Authority responsible for all financial services business operating in and from within the BVI.</p>
          <p>Extrede (VG) LLC operates under this website for the provision of services to selected jurisdictions outside the European Economic Area (EEA).</p>
        </div>

        <div className="regulation-card">
        <img id="regimg" src="/images/reg5.png"alt="step1"/><br/><br/>
          <p id="regpara"><b>Cyprus Securities and Exchange Commission (CySEC)</b></p>
          <hr/>
          <p>CySEC is the independent public supervisory authority responsible for the supervision of, inter alia, the investment services in Cyprus. Extrede (Cy) LLC is a Cyprus Investment Firm, authorized and regulated by the Cyprus Securities and Exchange Commission (CySEC) with license number 182/015.</p>
          <p>Extrede (Cy) LLC operates under the website www.oslocapitalllc.eu. Extrede(Cy) LLC does not offer services to retail clients.</p>
         </div>

        <div className="regulation-card">
        <img id="regimg" src="/images/reg6.png"alt="step1"/><br/><br/>
          <p id="regpara"><b>Capital Markets Authority (CMA)</b></p>
          <hr/>
          <p>

            Capital Markets Authority (CMA)
            Extrede (KE) LLC is authorized by the Capital Markets Authority (CMA) in Kenya as a non-dealing online foreign exchange broker with license number 1081.</p>
            <p>The CMA is a governmental regulating body charged with the prime responsibility of supervising, licensing and monitoring the activities of market intermediaries, and all other persons licensed under the Capital Markets Act.</p>
            <p>Extrede (KE) LLC operates under the website www.oslocapitals.ke</p>
        </div>
        <div className="regulation-card">

        <img id="regimg" src="/images/reg3.png"alt="step1"/><br/><br/>
          <p id="regpara"><b>Jordan Securities Commission (JSC)</b></p>
          <hr/>
            <p>JSC is the regulatory body responsible to license, regulate, enforce regulatory and compliance requirements, monitor and supervise the conduct of business in the non-bank financial services sector in the Hashemite Kingdom of Jordan.</p>
            <p>Extrede Jordan LLC is registered with the Companies Control Department with a registeration No. (60191) and regulated by the Jordan Securities Commission (JSC).</p>
            <p>Extrede Jordan LLC operates under the website www.oslocapitals.jo.</p>
         </div>
          </div>
          <br/><br/><br/>
          <strong>Regional restrictions</strong>
         <p id="regpara11">Extrede does not provide services to residents of several jurisdictions, including the USA.</p>
     
      </div>



        <div id="about-win">
      <h2 className="about-header">...and we keep growing steadily year by year. Take a moment to look at our milestones.</h2>
      <div className="about-timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className={`about-timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="about-timeline-circle">{index + 1}</div>
            <div className="about-timeline-content">
              <h3 className="about-year">{milestone.year}</h3>
              <h4 className="about-title">{milestone.title}</h4>
              {milestone.description && <p className="about-description">{milestone.description}</p>}
            </div>
          </div>
        ))}
      </div>
      </div>

      <div id="about-mobile-container">
      {milestones1.map((milestone, index) => (
        <div key={index} className="about-mobile-card">
          <div className="about-mobile-number">{index + 1}</div>
          <div className="about-mobile-content">
            <h3>{milestone.year}</h3>
            <h4>{milestone.title}</h4>
            <p>{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AboutMilestones;