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
          <li><a href="#">Trader of The Week</a></li>
          <li><a href="#">Regulation</a></li>
          <li><a href="#">Client Protection</a></li>
          <li><a href="#">Contact</a></li>
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
          <li><a href="/" onClick={closeMenu}> Home</a></li>
      <li className="custom-dropdown">
      {/* <a href="#"><i class="fa-solid fa-caret-down"></i>Trading</a> */}
      {/* <li id="custom-dropdown-menu" className="custom-dropdown-menu"> */}

      <a href="#" onClick={() => toggleDropdown("trading")}><i class="fa-solid fa-caret-down"></i>Trading</a>
      {openDropdown === "trading" && (

<li id="custom-dropdown-menu" className="custom-dropdown-menu">

      <div className="drop1">
        
        <div className="account1">

          <h3 className="head"><b>ACCOUNTS</b></h3>
          
          
          <li><Link to="/accounttype"><i class="fa-solid fa-arrow-trend-up"></i> Trading Accounts</Link></li>
          <li><Link to="vipaccount"><i class="fa-solid fa-arrow-trend-up"></i> VIP Accounts</Link></li>
          <li><Link to="robotrading"><i class="fa-solid fa-arrow-trend-up"></i> Robo Accounts</Link></li>
          <li><Link to="/copytrading"><i class="fa-solid fa-arrow-trend-up"></i> Copy Trading</Link></li>
          <li><Link to="/funding"><i class="fa-solid fa-arrow-trend-up"></i> Deposits Fund</Link></li>
          <li><Link to="/withdraw"><i class="fa-solid fa-arrow-trend-up"></i> Withdrawal Fund</Link></li>
          <li><Link to="/vipaccountwithdraw"><i class="fa-solid fa-arrow-trend-up"></i> (VIP) Withdrawal Request</Link></li>
        </div>

        
        <div className="insturments">
        <h3 className="head"><b>INSTURMENTS</b></h3>
        <li><Link to="/forex"><i class="fa-solid fa-arrow-trend-up"></i> Forex</Link></li>
          <li><Link to="/commodities"><i class="fa-solid fa-arrow-trend-up"></i> Commodities</Link></li>
          <li><Link to="/sharecfd"><i class="fa-solid fa-arrow-trend-up"></i> Share CFDs</Link></li>
          <li><Link to ="/bondcfd"><i class="fa-solid fa-arrow-trend-up"></i> Bonds CFDs</Link></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Metal</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Indices</a></li>
         
        </div>



        <div className="conditions">
        <h3 className="head"><b> CONDITIONS</b></h3>
        <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Execution Policy</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Spreads</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Swaps</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Margin and Leverage</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Overnight Positions</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Trading Hours</a></li>
         
        </div>



        <div className="tools">
        <h3 className="head"><b> TRADING TOOLS</b></h3>
        <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Economic Calendar</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Forex Sentiment</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Live Market News</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Forex Calculators</a></li>
          <li><a href="/"><i class="fa-solid fa-arrow-trend-up"></i> Holidays Calendar</a></li>
          <li><a href="/e"><i class="fa-solid fa-arrow-trend-up"></i> Traders of The Week</a></li>
         
        </div>

      </div>

      <h4 className="foot">$100 WELCOME BONUS Now more </h4>
     
      
    </li>

)}

  </li>
      


  <li className="custom-dropdown">
  {/* <a href="#"><i class="fa-solid fa-caret-down"></i> Platform </a> */}

  <a href="#" onClick={() => toggleDropdown("plateform")}><i class="fa-solid fa-caret-down"></i> Plateform</a>
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

  <a href="#" onClick={() => toggleDropdown("partners")}><i class="fa-solid fa-caret-down"></i>Partners</a>
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
           <p>  Introducing Broker Partner Programs
          Multi-Level Program
          Affiliate Programme 
          White Label</p>
        </div>

        <div className="docimg">
          <img id="mob" src="/images/mobpart.png" alt="mob partner"/>
        </div>
        </div>
    </li>
  )}
    </li>


          


            <li className="custom-dropdown">
  {/* <a href="#"><i class="fa-solid fa-caret-down"></i> Oslo Academy </a> */}
  <a href="#" onClick={() => toggleDropdown("oslo")}><i class="fa-solid fa-caret-down"></i> Extrede Academy</a>
  {openDropdown === "oslo" && (
  <li id="custom-dropdown-menu" className="custom-dropdown-menu">

          <div className="oslo">
            <div className="oslopara">
              <p>Learn all about trading with<br/> Extrede Academy and get the<br/> latest financial news plus in-<br/>depth market analysis.</p>
              <br/>
              <button id="vist">Vist extrede Academy </button>
            </div>

            <div className="top">
              <h3>TOP GUIDES</h3>
              <li><a href="/">New to Forex?</a></li>
                 <li><a href="/"> Forex Basics</a></li>
                 <li><a href="/">Successful Traders Guide</a></li>
                 <li><a href="/">Trading Principles</a></li>
                 <li><a href="/">Top Trading Strategies</a></li>
                 <li><a href="/">How to Make Money in Forex?</a></li>
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
  <a href="accounttype"><i class="fa-solid fa-caret-down"></i> Company </a>
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
                <h4>About us</h4>
                <li><a href="/">Regulation</a></li>
                <li><a href="/">Our Awards</a></li>
                <li><a href="/">Our Worldwide Office</a></li>
                <li><a href="/"> Executive Committee</a></li>
                <li><a href="/">Our Trading Partner</a></li>
                <li><a href="/">Our Trading Servers</a></li>
                <li><a href="/">Govt.UK License Visit</a></li>
                
              </div>

              <div className="trade">
                <h4>Why Trade With Us</h4>
                <li><a href="/">Client Fund Protection</a></li>
                <li><a href="/">Our Insurance Program</a></li>
                <li><a href="/">Invest Responsibly</a></li>
                <li><a href="/">Legal Documents</a></li>
           
              </div>

              <div className="man1">
                <img src="/images/girl.jpeg" alt="girl"/>
              </div>
            </div>
    </li>
    </li>
            {/* <li><a href="#" onClick={closeMenu}>Company</a></li> */}
            {/* <li><a href="/" onClick={closeMenu}>Promotions</a></li> */}
            <li><a href="/" onClick={closeMenu}>Help Center</a></li>
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
