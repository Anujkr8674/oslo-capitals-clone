import React, { useState } from "react";
import "../style/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // const [openDropdown, setOpenDropdown] = useState(null);

// const handleDropdown = (menu) => {
//   setOpenDropdown(openDropdown === menu ? null : menu);
// };



document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      const menu = this.querySelector(".custom-dropdown-menu");
      menu.style.display = "block";

      const rect = menu.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (rect.right > windowWidth) {
        menu.style.left = "auto";
        menu.style.right = "0";
        menu.style.transform = "none"; // Transform reset karein
      } else {
        menu.style.left = "50%";
        menu.style.right = "auto";
        menu.style.transform = "translateX(-50%)";
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      this.querySelector(".custom-dropdown-menu").style.display = "none";
    });
  });
});


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="top-banner">
        <p>159,363,841.2 $ Paid out to IB Partners in commissions since 2007</p>
      </div>
      <nav className="top-nav">
        <ul>
          <li><Link to="/trade-of-the-weak">Trader of The Week</Link></li>
          <li><Link to="/regulation">Regulation</Link></li>
          {/* <li><a href="#">Client Protection</a></li> */}
          <li><Link to ="/contactus">Contact</Link></li>
          <li>
            <br/>
            <select>
              <option className="option">Select Language</option>
            </select>
          </li>
        </ul>


        <a href="https://trade.extrede.com/register/">
          <button id="open-account" className="open-account">Open Account</button>
      </a>
        <br/>
        <a href="https://trade.extrede.com/login/">
          <button id="open-account" className="open-account">Login</button>
        </a>

        
        <div id="licence" className="license">
          <a href="#">Govt.UK License</a>
        
          <a href="https://trade.extrede.com/register/">
            <button id="account"className="account"><i class="fa-regular fa-address-card"></i> Open Account</button>
          </a>

          <a href="https://trade.extrede.com/login/">
            <button id="login"className="account"><i class="fa-regular fa-user"></i> Login</button>
          </a>
        </div>
      </nav>
      <div className="logo-nav">
        <h1 className="logo">
          {/* OSLO<span>CAPITALS</span> */}
          {/* <img src="/images/logo.png" alt="logo with text"/> */}
          <img src="/images/mainlogo.png" alt="mainlogo"/>
        </h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav id="" className={`main-nav ${menuOpen ? "active" : ""}`}>

           {/* Close Icon (Only in Mobile Mode) */}
           {menuOpen && (
            <div className="close-icon" onClick={closeMenu}>
              <FaTimes />
            </div>
           )}


          <ul>
          <li><Link to="/" onClick={closeMenu}> Home</Link></li>
      <li className="custom-dropdown">
      {/* <a href="#"> Trading</a> */}
      {/* <li id="custom-dropdown-menu" className="custom-dropdown-menu"> */}

      {/* <a href="#" onClick={() => toggleDropdown("trading")}> Trading</a> */}
      <a href="#" onClick={() => toggleDropdown("trading")}> Trading</a>
      {openDropdown === "trading" && (

<li id="custom-dropdown-menu" className="custom-dropdown-menu">

      <div className="drop1">
        
        <div className="account1">

          <h3 className="head"><b>ACCOUNTS</b></h3>
          
          
          {/* <li><Link to="/accounttype">  Trading Accounts</Link></li> */}
          <li><Link to="/accounttype">  Trading Accounts</Link></li>
          <li><Link to="/vipaccount">  VIP Accounts</Link></li>
          <li><Link to="/robotrading">  Robo Accounts</Link></li>
          <li><Link to="/copytrading">  Copy Trading</Link></li>
          <li><Link to="/funding">  Deposits Fund</Link></li>
          <li><Link to="/withdraw">  Withdrawal Fund</Link></li>
          <li><Link to="/vipaccountwithdraw">  (VIP) Withdrawal Request</Link></li>
        </div>

        
        <div className="insturments">
        <h3 className="head"><b>INSTURMENTS</b></h3>
        <li><Link to="/forex">  Forex</Link></li>
          <li><Link to="/commodities">  Commodities</Link></li>
          <li><Link to="/sharecfd">  Share CFDs</Link></li>
          <li><Link to ="/bondcfd">  Bonds CFDs</Link></li>
          <li><Link to="/metals">  Metal</Link></li>
          <li><Link to="/indices">  Indices</Link></li>
         
        </div>



        <div className="conditions">
        <h3 className="head"><b> CONDITIONS</b></h3>
        <li><Link to="/execution">  Execution Policy</Link></li>
          <li><Link to="/spreads">  Spreads</Link></li>
          <li><Link to="/swap">  Swaps</Link></li>
          <li><Link to="/margin-and-leverage">  Margin and Leverage</Link></li>
          <li><Link to="/over-night">  Overnight Positions</Link></li>
          <li><Link to="/trading-hours">  Trading Hours</Link></li>
         
        </div>



        <div className="tools">
        <h3 className="head"><b> TRADING TOOLS</b></h3>
        <li><Link to="/Eco-Calender">  Economic Calendar</Link></li>
          {/* <li><Link to="/">  Forex Sentiment</Link></li> */}
          <li><Link to="/sharecfd">  Live Market News</Link></li>
          {/* <li><Link to="/">  Forex Calculators</Link></li> */}
          <li><Link to="/holiday">  Holidays Calendar</Link></li>
          <li><Link to="/trade-of-the-weak">  Traders of The Week</Link></li>
         
        </div>

      </div>

      <h4 className="foot">$100 WELCOME BONUS Now more </h4>
     
      
    </li>

)}

  </li>
      


  <li className="custom-dropdown">
  {/* <a href="#">  Platform </a> */}

  <a href="#" onClick={() => toggleDropdown("plateform")}>  Plateform</a>
  {openDropdown === "plateform" && (
  <li id="custom-dropdown-menu" className="custom-dropdown-menu">

  <div className="drop1">
        <div className="stockimg">

           <img id="stock" src="/images/stockmob.png" alt="stockfon"/>
        </div>

        
        <div className="textpara">


            <p id="para">+1 M I L I O N  D O W N L O A D</p>
          <h3>Oslo Official Trading Terminal</h3>
          <button className="android">Download for Android</button><br/>
          <button className="android">Download for Desktop</button><br/>
          <button className="android">Download for Iphone</button>
          <br/><br/><br/>
          <h5 id="h5">Learn More About Terminal</h5>
         
        </div>
        </div>
    </li>
  )}
    </li>






    <li className="custom-dropdown">

  <a href="#" onClick={() => toggleDropdown("partners")}> Partners</a>
  {openDropdown === "partners" && (
  <li id="custom-dropdown-menu" className="custom-dropdown-menu">

  <div className="part">
        <div className="stockimg">

           <img id="stock" src="/images/aifa.png" alt="stockfon"/>
        </div>

        
        <div className="partner">


            <p ><b>Best IB Program Asia 2012</b></p>
          <p>Join an award-winning program with the best conditions on the market<br/>
          </p>
         
        </div>

        <div className="info">


        <li><Link to="/introduction-broker"> Introducing Broker </Link></li>
        <li><Link to="/multi-level-program">Multi-Level Program</Link></li>
        <li><Link to="/affiliate-programme">   Affiliate Programme  </Link></li>
        <li><Link to="/white-label"> White Label</Link></li>
         
        </div>

        <div className="docimg">
          <img id="mob" src="/images/mobpart.png" alt="mob partner"/>
        </div>
        </div>
    </li>
  )}
    </li>


          


            <li className="custom-dropdown">
  {/* <a href="#">  Oslo Academy </a> */}
  <a href="#" onClick={() => toggleDropdown("oslo")}>  Extrede Academy</a>
  {openDropdown === "oslo" && (
  <li id="custom-dropdown-menu" className="custom-dropdown-menu">

          <div className="oslo">
            <div className="oslopara">
              <p>Learn all about trading with<br/> Extrede Academy and get the<br/> latest financial news plus in-<br/>depth market analysis.</p>
              <br/>
              {/* <button id="vist">Vist extrede Academy </button> */}
            </div>

            <div className="top">
              <h3>TOP GUIDES</h3>
             


              {/* <li><Link to="/beg-forex"> New to Forex?</Link></li> */}
              <li><Link to="/basic-forex"> Forex Basics</Link></li>
              {/* <li><Link to="/introduction-broker"> Successful Traders Guide</Link></li> */}
              <li><Link to="/tranding-principle"> Trading Principles</Link></li>
              <li><Link to="/best-tradeing"> Top Trading Strategies</Link></li>
              {/* <li><Link to="/introduction-broker"> How to Make Money in Forex?</Link></li> */}

       
                 
            </div>

            <div className="man">
              <img id="mman" src="/images/mman.png" alt="man"/>
            </div>
          </div>
          <div className="color">
          <button id="guide">Latest Guide</button>
          <hr/>

         <div className="footerimg">
         <div className="footimg1">
            <div className="stock1">
              <img id="foot1" src="/images/forex.jpg" alt="forex"/>
            </div>
            <div className="stocktext">
              <p><b>6 years ago</b></p>
              <p>  <b>Why Trade Forex: 
              
              Forex vs. Stocks?</b>
            
              </p>
            </div>
          </div>


          <div className="footimg1">
            <div className="stock1">
              <img id="foot1" src="/images/forex.jpg" alt="forex"/>
            </div>
            <div className="stocktext">
              <p><b>6 years ago</b></p>
              <p> <b>What is Forex</b>
            
              </p>
            </div>
          </div>


          <div className="footimg1">
            <div className="stock1">
              <img id="foot1" src="/images/forex.jpg" alt="forex"/>
            </div>
            <div className="stocktext">
              <p><b>Understanding pips and pipettes in forex trading</b></p>
             
            </div>
          </div>


          <div className="footimg1">
            <div className="stock1">
              <img id="foot1" src="/images/forex.jpg" alt="forex"/>
            </div>
            <div className="stocktext">
              <p ><b>6 years ago</b></p>
              <p>  <b>Trading Principal</b>
            
              </p>
            </div>
          </div>
   
         </div>
         </div>
    </li>
  )}
    </li>


    <li className="custom-dropdown">
  <a href="accounttype">  Company </a>
  <li id="custom-dropdown-menu" className="custom-dropdown-menu">

            <div className="company">
              <div className="about">
                <div className="text1">
                    <h4>About</h4>
                    
                    <p>Discover all there is to know about Oslo Capitals and explore potential partnership opportunities.</p>
                </div>
                <div className="image">
                  <img id="image" src="/images/awrd.png" alt="awrd"/>
                </div>
              </div>

              <div className="aboutus">
              {/* about */}
                <h4>About us</h4>
                <li><Link to="/about">About Extrede</Link> </li>
                <li><Link to="/regulation">Regulation</Link></li>
                <li><Link to ="/awards">Our Awards</Link></li>
                <li><Link to="/office-location">Our Worldwide Office</Link></li>
                {/* <li><a href="/"> Executive Committee</a></li> */}
                <li><Link to="/Partner-trade">Our Trading Partner</Link></li>
                <li><Link to="/trading-server">Our Trading Servers</Link></li>
                {/* <li><a href="/">Govt.UK License Visit</a></li> */}
                
              </div>

              {/* <div className="trade">
                <h4>Why Trade With Us</h4>
                <li><a href="/">Client Fund Protection</a></li>
                <li><a href="/">Our Insurance Program</a></li>
                <li><a href="/">Invest Responsibly</a></li>
                <li><a href="/">Legal Documents</a></li>
           
              </div> */}

              <div className="man1">
                <img src="/images/girl.jpeg" alt="girl"/>
              </div>
            </div>
    </li>
    </li>
            {/* <li><a href="#" onClick={closeMenu}>Company</a></li> */}
            {/* <li><a href="/" onClick={closeMenu}>Promotions</a></li> */}
            <li><Link to="/contactus" onClick={closeMenu}>Help Center</Link></li>
          </ul>
          
        </nav>

        <div id="regbutton" className="regbutton">
        <a href="https://trade.extrede.com/register/">
          <button className="open-account"><i class="fa-regular fa-address-card"></i> Open Account</button>
      </a>
        <br/>
        <a href="https://trade.extrede.com/login/">
          <button className="open-account">  <i class="fa-regular fa-user"></i>  Login</button>
        </a>
        </div>
      
      </div>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
