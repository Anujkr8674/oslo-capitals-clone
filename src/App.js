import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import ScrollToTop from "./ScrollToTop";
import ScrollToTop from "./ScrollToTop";
// import Home from "./pages/Home";
import Home from "./pages/home";
import Body from "./components/Body";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountTypes from "./pages/AccountTypes";
import VipAccount from "./pages/VipAccount";
import RoboTrading from "./pages/RoboTrading";
import CopyTrading from "./pages/CopyTrading";
import FundingPage from "./pages/FundingPage";
import WithdrawPage from "./pages/WithdrawPage";
import VipAccountWithdraw from "./pages/VipAccountWithdraw";

function App() {
  return (
    <Router>
    <>
    
      <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounttype" element={<AccountTypes />} />
        <Route path="/vipaccount" element={<VipAccount />} />
        <Route path="/robotrading" element={<RoboTrading />} />
        <Route path="/copytrading" element={<CopyTrading/>}/>
        <Route path="/funding" element={<FundingPage/>}/>
        <Route path="/withdraw" element={<WithdrawPage/>}/>
        <Route path="/vipaccountwithdraw" element={<VipAccountWithdraw/>}/>
        <Route path="/body" element={<Body />} />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
