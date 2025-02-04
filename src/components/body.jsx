
// import React from "react";
import React, { useRef, useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';




import "../style/body.css"; 
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChartLine, FaCoins, FaLeaf, FaFileInvoice, FaBoxOpen, FaChartBar } from "react-icons/fa";




const Body = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);



  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleProgress = () => {
    const progressValue =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progressValue);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };



  const slides = [
    {
      image: "/images/cu1.png",
      // title: "— 87.6 Client Satisfaction",
      title: "OSLO ACADEMY LEARN FROM EXPERTS",
      description: "Get all the free education you need to become a better trader. Whether you’re a beginner or an expert, we’ll have something for you. From articles to educational webinars, videos, and courses; you name it, we’ll have it.",
    },
    {
      image: "/images/cu2.png",
      title: "ECONOMIC CALENDAR TRADE WITH ACCURACY",
      description: "Stay ahead of the game with our comprehensive economic calendar. Track important, market-moving events effortlessly and anticipate major movements in the market. Our calendar keeps you informed about key dates and times, so you can make smarter trading decisions with confidence.",
    },
    {
      image: "/images/cu3.png",
      title: "CUSTOMER SUPPORT",
      description: "We provide support and detailed account information at every stage of your journey. Our dedicated customer support team is available 24/5 to provide assistance with any trading-related issues or questions.",
    },
    {
      image: "/images/cu4.png",
      title: "MARKET ANALYSIS",
      description: "With our expert market analysis, we help traders break down what’s happening in the markets and stay informed about the latest trends. Our analysis includes daily market commentary, and technical analysis reports.",
    },
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };



  useEffect(() => {
    // Automatically change slides every 3 seconds
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Throttle the scroll speed by adding a delay
    let isScrolling = false;

    const handleScroll = (e) => {
      if (isScrolling) return; // If scrolling is already in progress, ignore further scroll events
      isScrolling = true; // Mark that scrolling is in progress

      if (e.deltaY > 0) {
        goToNextSlide(); // Scroll down (move up)
      } else {
        goToPrevSlide(); // Scroll up (move down)
      }

      // Add a small delay to slow down the scroll speed
      setTimeout(() => {
        isScrolling = false; // Reset the scrolling state after the delay
      }, 500); // 500ms delay for smoother transition
    };

    window.addEventListener('wheel', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  


  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Trade Proudly with Over 1 Million Traders Worldwide</h1>
        <p>From secure payments to negative balance protection, you are covered.</p>
      </div>

      {/* Top Navigation List */}
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

      <hr/>

      <h3 id="featured">As Featured at:</h3>
      <section className="partners">
        <div className="partner-logos">
          <img src="/images/astro.jpg" alt="Bloomberg" />
          <img src="/images/citi.png" alt="Yahoo Finance" />
          <img src="/images/astro.jpg" alt="Investing.com" />
          <img src="/images/citi.png" alt="Awards" />
          {/* <img src="/images/astro.jpg" alt="Bloomberg" /> */}
          {/* <img src="/images/citi.png" alt="Yahoo Finance" />
          <img src="/images/astro.jpg" alt="Investing.com" />
          <img src="/images/citi.png" alt="Awards" />
          <img src="/images/astro.jpg" alt="Bloomberg" /> */}
       
        </div>
      </section>

      <br />
      <br />
      <br />
    {/* <div className="video">

    <video width="50%" >
            <source id="video" src="/images/oslo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      
    </div> */}



<div className="video-container">
  <div className="video-wrapper">
    <video
      ref={videoRef}
      onClick={togglePlayPause}  // Handle click on video
      onTimeUpdate={handleProgress}
      className="video-player"
      poster="/images/tumb.jpeg" // Thumbnail before play
    >
      <source src="/images/oslo1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Video Controls (at the bottom of the video) */}
    <div className={`controls ${showControls ? "visible" : ""}`}>
      <button onClick={togglePlayPause} className="control-btn">
        {playing ? (
          <i className="fa fa-pause"></i> // Pause icon
        ) : (
          <i className="fa fa-play"></i> // Play icon
        )}
      </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="progress-bar"
          />

          <button onClick={handleFullscreen} className="control-btn">
            🔲
          </button>
        </div>
      </div></div>

    <br/><br/><br/>
      {/* Main Section with Background Image */}
      {/* <h1>Helping investor and trader to achieve financial goals.</h1> */}
      <div className="div1">

      <h1>Helping investor and trader to achieve financial goals.</h1>
        
        {/* Features Section */}
        
        <div className="div2">
        
       
          <div className="divul">
          
            <i className="fa-solid fa-dollar-sign"></i>
            <br />
            <h4>Fast Withdrawals</h4>
            <p>Easy access to your funds<br /> anywhere, anytime.¹</p>
          </div>
          <div className="divul">
            <i className="fa-solid fa-dollar-sign"></i>
            <br />
            <h4>Stable Spreads</h4>
            <p>Trading with tight<br /> spreads starting from 0 pips.</p>
          </div>
          <div className="divul">
            <i className="fa-solid fa-dollar-sign"></i>
            <br />
            <h4>Swap-free Trading</h4>
            <p>Overnight charges for all<br /> clients.</p>
          </div>
          <div className="divul">
            <i className="fa-solid fa-dollar-sign"></i>
            <br />
            <h4>Fast Execution</h4>
            <p>Order execution takes only<br /> fractions of a second.</p>
          </div>
        </div>
      </div>

      {/* New Section After Features */}
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

      <div className="imgtext">
        <div className="img1">
          <img src="/images/man.jpg" alt="man img"/>
          <div className="overlay-text"><b className="b">12</b> Years of<br/><span className="span">Experience </span> </div>
        </div>

        <div className="text">
          <p id="p">Proud to take care of your investment journey</p>
          
          <h3><b>Oslo Capitals – Everyone’s
            Trusted CFD Broker</b>
          </h3>
          <p>One of the world's leading CFD brokers with over 12 years of market
            experience, Oslo Capitals provides traders a CFD trading platform with
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




        <div className="partner">
          <h1 id="our">Our Liquidity Partners</h1>
        </div>

        <div className="slider-container">
          <div className="slider">
            <img src="/images/citi.png" alt="partner" />
            <img src="/images/jp.png" alt="partner" />
            <img src="/images/hsbc.png" alt="partner" />
            <img src="/images/citi.png" alt="partner" />
            <img src="/images/jp.png" alt="partner" />
            <img src="/images/hsbc.png" alt="partner" />
            <img src="/images/citi.png" alt="partner" />
            <img src="/images/jp.png" alt="partner" />
            <img src="/images/hsbc.png" alt="partner" />

            <img src="/images/hsbc.png" alt="partner" />
            <img src="/images/citi.png" alt="partner" />
            <img src="/images/jp.png" alt="partner" />
            <img src="/images/hsbc.png" alt="partner" />
          </div>
        </div>

          <br/><br/>
        
      <div className="financial-instruments">
        <div className="left-section">
          <h3>Access Biggest Market</h3>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#a855f7" />
            ))}
          </div>
          <h2>
            <span className="highlight">Trade hundreds</span> <br /> of financial<br/> instruments
          </h2>
          <p>Choose from over 750 CFDs and take<br/> advantage of market opportunities.</p>
          <button className="join-btn">JOIN THE COMMUNITY</button>
        </div>
        <br/>
        <div className="right-section">
          <div className="instrument">
            <FaChartLine className="icon" />
            <h4>Forex</h4>
            <p>70+ major, minor, and exotic<br/> currency pairs.</p>
          </div>
          <div className="instrument">
            <FaCoins className="icon" />
            <h4>Stocks</h4>
            <p>3000+ Share CFDs, as well as<br/> the ability to invest in thousands<br/> of shares.</p>
          </div>
          <div className="instrument">
            <FaLeaf className="icon" />
            <h4>Commodities</h4>
            <p>CFDs on metals, energies, and<br/> agriculture commodities.</p>
          </div>
          <div className="instrument">
            <FaFileInvoice className="icon" />
            <h4>Bonds</h4>
            <p>US Treasuries and Germany<br/> Bund CFDs.</p>
          </div>
          <div className="instrument">
            <FaBoxOpen className="icon" />
            <h4>Metals</h4>
            <p>Most popular precious metals<br/> with consistently tight pricing.</p>
          </div>
          <div className="instrument">
            <FaChartBar className="icon" />
            <h4>Indices</h4>
            <p>43 Indices CFDs, including cash<br/> CFDs and Index Futures.</p>
          </div>
        </div>
    </div>

    
    <div className="imgtext">
        

        <div className="text">
          <p id="p">You are safe with us.</p>
          
          <h1  className="h1">Your safety is our priority
          </h1 >
          <p>We protect your privacy with advanced security measures, ensuring your funds and payments are safe. With our negative balance protection, you can trade with confidence.</p>
          <br/>
          <div className="rest1">
           

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
          
          <div className="img1">
          <img src="/images/girl.jpeg" alt="girl"/>
          {/* <div className="overlay-text"><b className="b">12</b> Years of<br/><span className="span">Experience </span> </div> */}
        </div>
          </div>

            <br/><br/>
          <div className="imgtext">
          <div className="text">
          
          
          <h1 id="h11" className="h2">
          Industry-Leading Trading Platform MT5
          </h1>
          <p>Trade the global markets with MetaTrader 5, the most popular and reliable trading platform with access to advanced chart and indicator functionality, live forex rates and exclusive trading tools including Expert Advisors.
          </p>
          <br/><br/>
          <button className="btn1">
            <div className="icon">
            <i class="fa-solid fa-lock"></i>
            </div>
            <div className="name">
              <p id="p1">10M+ INSTALLED<br/><span className="s">DOWNLOAD APPLICATION</span></p>
            </div>
            
          </button>
          </div>
          <div className="img1">
          <video  id="oslo1" width="100%" autoPlay muted loop>
            <source  src="/images/oslo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          </div>

          </div>
          

              <br/><br/>



      <div className="flex ">
     

        <div className="img12">
          <video id="ani11" width="100%" autoPlay muted loop>
            <source id="ani" src="/images/ani22.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          </div>
      {/* Right Side - Scrollable Content */}
      <div id="aw" className="w-1/2 overflow-y-scroll h-[80vh] p-5 bg-white shadow-lg rounded-lg">
        <h2 id="trade" className="font-bold text-lg">Trade Now:</h2>
        <p className="text-gray-600 mt-2" id="tradeText">
         <b>Access some of the most POPULAR INSTRUMENTS on the Market.</b>Trade a wide range of CFDs instruments on Forex, Indices, Metals, Crypto, and Shares, and experience the global markets at your fingertips.
        </p>
        <button id="btn" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">TRADE TODAY</button>
        <br/><br/>
        {/* Scrollable Features */}
        <ul className="mt-6 space-y-4">
          <li id="li" className="font-semibold">1. Leverage up to: 1:500</li><br/><br/>
          <li id="li" className="font-semibold">2. Forex typical spreads from 0.6 pips (EURUSD), micro lots and fractional shares</li>
          <br/><br/><li id="li" className="font-semibold">3. Free real-time charts, market news, and research</li>
          <br/><br/><li id="li" className="font-semibold">4. 4,000+ CFDs on currencies, energies, metals, indices & stocks</li>
          <br/><br/><li id="li" className="font-semibold">5. 4,500+ single shares and ETFs</li>
        </ul>
      </div>
    </div>
            <br/><br/>
    <p className="says">Trusted by +2M Traders Worldwide</p>
    <h1 className="says">Read What Our<br/>
    Traders Says</h1>
    <div className="log1">
    <img id="log1" src="/images/logoimg1.png" alt="logomob"/><img id="log1"src="/images/logoimg2.png" alt="logomob"/><img id="log1" src="/images/logoimg1.png" alt="logomob"/>
    </div>
    <p id="oslocapitals" className="says">Trustpilot reviews ★★★★★</p>


            {/* Testimonial Cards Section */}
          <div className="testimonial-section">
            {/* <h2>Read What Our<br/> </h2><h2 id="our2">Traders <img id="log1" src="/images/logoimg1.png"/><img id="log1"src="/images/logoimg2.png"/><img id="log1" src="/images/logoimg1.png"/>  Say</h2> */}
            <div className="testimonial-cards">
              <motion.div
                className="testimonial-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              > 
                <div className="imgflex">
                <div className="testimonial-image">
                  <img src="/images/clip.jpg" alt="testimonial image" />
                </div>
                
                <h4>- John D.</h4>
                </div>
                <p>
                  "Oslo Capitals provides excellent trading tools! The execution
                  speed is incredible, and the spreads are tight. Highly
                  recommended!"
                </p>
              </motion.div>
              <motion.div
                className="testimonial-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              > 
                <div className="imgflex">
                <div className="testimonial-image">
                  <img src="/images/clip.jpg" alt="testimonial image" />
                </div>
                
                <h4>- John D.</h4>
                </div>
                <p>
                  "Oslo Capitals provides excellent trading tools! The execution
                  speed is incredible, and the spreads are tight. Highly
                  recommended!"
                </p>
              </motion.div>
              <motion.div
                className="testimonial-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              > 
                <div className="imgflex">
                <div className="testimonial-image">
                  <img src="/images/clip.jpg" alt="testimonial image" />
                </div>
                
                <h4>- John D.</h4>
                </div>
                <p>
                  "Oslo Capitals provides excellent trading tools! The execution
                  speed is incredible, and the spreads are tight. Highly
                  recommended!"
                </p>
              </motion.div>
              <motion.div
                className="testimonial-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              > 
                <div className="imgflex">
                <div className="testimonial-image">
                  <img src="/images/clip.jpg" alt="testimonial image" />
                </div>
                
                <h4>- John D.</h4>
                </div>
                <p>
                  "Oslo Capitals provides excellent trading tools! The execution
                  speed is incredible, and the spreads are tight. Highly
                  recommended!"
                </p>
              </motion.div>

              <motion.div
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            > 
              <div className="imgflex">
              <div className="testimonial-image">
                <img src="/images/clip.jpg" alt="testimonial image" />
              </div>
              
              <h4>- John D.</h4>
              </div>
              <p>
                "Oslo Capitals provides excellent trading tools! The execution
                speed is incredible, and the spreads are tight. Highly
                recommended!"
              </p>
            </motion.div>
            <motion.div
              className="testimonial-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            > 
              <div className="imgflex">
              <div className="testimonial-image">
                <img src="/images/clip.jpg" alt="testimonial image" />
              </div>
              
              <h4>- John D.</h4>
              </div>
              <p>
                "Oslo Capitals provides excellent trading tools! The execution
                speed is incredible, and the spreads are tight. Highly
                recommended!"
              </p>
            </motion.div>





              
            </div>
          </div>





<div id="unique" className="unique-vertical-slider">
      <div className="unique-slider-container">
        <div className="unique-slider-item">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`unique-slider-text ${currentIndex === index ? 'unique-active' : ''}`}
            >
              <div className="unique-slider-img">
                <img src={slide.image} alt={`Image ${index + 1}`} />
              </div>
              <div id="unique-text-content" className="unique-text-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <br />
                <button>Visit Oslo Academy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="unique-slider-navigation">
        <button onClick={goToPrevSlide} className="up-button">
          <i className="fas fa-arrow-up"></i>
        </button>
        <button onClick={goToNextSlide} className="down-button">
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
    </div>




    

    <div id="custom-slider" class="custom-vertical-slider">
  <div class="custom-slider-container">
    <div class="custom-slider-item">
      <div class="custom-slider-text">
        <div class="custom-slider-img">
          <img alt="Image 1" src="/images/cu1.png"/>
        </div>
        <div class="img">
          <h2>OSLO ACADEMY LEARN FROM EXPERTS</h2>
          <p>Get all the free education you need to become a better trader. Whether you’re a beginner or an expert, we’ll have something for you. From articles to educational webinars, videos, and courses; you name it, we’ll have it.</p>
          <br/><button>Visit Oslo Academy</button>
        </div>
      </div>
    </div>
    <div class="custom-slider-item">
      <div class="custom-slider-text">
        <div class="custom-slider-img">
          <img alt="Image 2" src="/images/cu2.png"/>
        </div>
        <div class="custom-text-content">
          <h2>ECONOMIC CALENDAR TRADE WITH ACCURACY</h2>
          <p>Stay ahead of the game with our comprehensive economic calendar. Track important, market-moving events effortlessly and anticipate major movements in the market. Our calendar keeps you informed about key dates and times, so you can make smarter trading decisions with confidence.</p>
          <br/><button>Visit Oslo Academy</button>
        </div>
      </div>
    </div>


    
    <div class="custom-slider-item">
      <div class="custom-slider-text">
        <div class="custom-slider-img">
          <img alt="Image 3" src="/images/cu3.png"/>
        </div>
        <div class="custom-text-content">
          <h2>CUSTOMER SUPPORT</h2>
          <p>We provide support and detailed account information at every stage of your journey. Our dedicated customer support team is available 24/5 to provide assistance with any trading-related issues or questions.</p>
          <br/><button>Visit Oslo Academy</button>
        </div>
      </div>
    </div>
    <div class="custom-slider-item active">
      <div class="custom-slider-text">
        <div class="custom-slider-img">
          <img alt="Image 4" src="/images/cu4.png"/>
        </div>
        <div class="<img">
          <h2>MARKET ANALYSIS</h2>
          <p>With our expert market analysis, we help traders break down what’s happening in the markets and stay informed about the latest trends. Our analysis includes daily market commentary, and technical analysis reports.</p>
          <br/><button>Visit Oslo Academy</button>
        </div>
      </div>
    </div>
  </div>
  <div class="custom-slider-navigation">
    <button class="custom-up-button"><i class="fas fa-arrow-up"></i></button>
    <button class="custom-down-button"><i class="fas fa-arrow-down"></i></button>
  </div>
</div>

<br/>

      <section className="oslo-academy">
        <div className="btndiv">
      <div className="oslo-header">
        <h2>Oslo Academy</h2>
        <button className="visit-btn">Visit Academy</button>
      </div>
     
      </div>
      <p className="oslo-description">
        Whatever your experience, we’ve got the tools and resources to help<br/> improve your trading. We have something for traders of all skill levels.
      </p>
      <br/><br/>
      
      <div className="oslo-cards">
        <div className="oslo-card">
          <img
            src="/images/trad.jpg"
            alt="Best intraday trading strategies"
            className="oslo-card-image"
          />
          <p className="oslo-learn">OSLO LEARN • 5 YEARS AGO</p>
          <h3 className="oslo-title">Best trading strategies and techniques</h3>
        </div>

        <div className="oslo-card">
          <img
            src="/images/liveTrad.jpg"
            alt="Trading Principles"
            className="oslo-card-image"
          />
          <p className="oslo-learn">OSLO LEARN • 5 YEARS AGO</p>
          <h3 className="oslo-title">Trading Principles</h3>
        </div>

        <div className="oslo-card">
          <img
            src="/images/forex.jpg"
            alt="Why Trade Forex: Forex vs. Stocks"
            className="oslo-card-image"
          />
          <p className="oslo-learn">OSLO LEARN • 6 YEARS AGO</p>
          <h3 className="oslo-title">Why Trade Forex: Forex vs. Stocks?</h3>
        </div>

        <div className="oslo-card">
          <img
            src="/images/earn.jpg"
            alt="How to Make Money Trading Forex?"
            className="oslo-card-image"
          />
          <p className="oslo-learn">OSLO LEARN • 6 YEARS AGO</p>
          <h3 className="oslo-title">How to Make Money Trading Forex?</h3>
        </div>
      </div>
      <button className="read-more">Read More</button>
    </section>


    <div className="bg-white py-10 px-4 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Start Your Trading Portfolio.
      </h2>
      <div id="new" className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Steps Section */}
        <div className="text-left space-y-6 max-w-lg">
          <div className="flex items-start space-x-4">
            {/* <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              1
            </span> */}
            <div>
              <h3 className="text-xl font-semibold">1   Register</h3>
              <p>
                Signup for an Oslo Capitals account and get access to world-class
                pricing.
              </p>
              <button id="open" className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Open Account →
              </button>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            {/* <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              2
            </span> */}
            <div>
              <h3 className="text-xl font-semibold">2 Verify your identity</h3>
              <p>
                Complete the identity verification process to secure your account
                and transactions.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            {/* <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              3
            </span> */}
            <div>
              <h3 className="text-xl font-semibold">3 Start trading</h3>
              <p>
                You’re good to go! Trade 300+ markets across forex, crypto,
                stocks, commodities.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Preview */}
        <div>
          <img id="img"
            src="/images/mobile.jpg"
            alt="Mobile Trading Preview"
            className="w-64 md:w-80 shadow-lg rounded"
          />
        </div>
      </div>
            <br/><br/>
      {/* Fee Section */}
      <div className="mt-10">
        <h3 id="zero" className="text-xl font-semibold text-gray-800">
          Zero Fee, Deposit & Withdraw.
        </h3>
        <p id="zero" className="text-gray-600">
          Deposit and trade instantly using our wide range of fee-free funding
          options. No withdrawal fees.
        </p>
        <div className="pay">
        <div className="flex justify-center items-center mt-4 space-x-6">
          <img src="/images/skirl.png" alt="Skrill" className="h-8" id="imgsk" />
          <img src="/images/net.jpg" alt="Neteller" className="h-8"id="imgsk"  />
          <img src="/images/astro.jpg" alt="AstroPay" className="h-8"id="imgsk"  />
          <img src="/images/skirl.png" alt="Bitcoin" className="h-8" id="imgsk" />
          <img src="/images/net.jpg" alt="NetBanking" className="h-8"id="imgsk" />
        </div>
        </div>
      </div>
    </div>
    <br/>  <br/>  <br/>
    </div>

  
  );
};

export default Body;
