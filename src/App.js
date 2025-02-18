import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import ScrollToTop from "./ScrollToTop";
import ScrollToTop from "./ScrollToTop";
// import Home from "./pages/Home";
import Home from "./pages/Home";
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
import ForexPage from "./pages/ForexPage";
import CommoditiesTrading from "./pages/CommoditiesTrading";
import ShareCfd from "./pages/ShareCfd";
import BondCfd from "./pages/BondCfd";
import MetalsTrading from "./pages/MetalsTrading";
import IndicesTrading from "./pages/IndicesTrading";
import ExecutionPolicy from "./pages/ExecutionPolicy";
import Spreads from "./pages/Spreads";
import SwapRates from "./pages/SwapRates";
import OverNight from "./pages/OverNight";
import TradingHours from "./pages/TradingHours";
import MarginPage from "./pages/MarginPage";
import EconomicCalendar from "./pages/EconomicCalendar";
import Holiday from "./pages/Holiday";
import TradeWeakLeaderboard from "./pages/TradeWeakLeaderboard ";


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
        <Route path="/forex" element={<ForexPage/>}/>
        <Route path="/commodities" element={<CommoditiesTrading/>}/>
        <Route path="/sharecfd" element={<ShareCfd/>}/>
        <Route path="/bondcfd" element={<BondCfd/>}/>
        <Route path="/metals" element={<MetalsTrading/>}/>
        <Route path="/indices" element={<IndicesTrading/>}/>
        <Route path="/execution" element={<ExecutionPolicy/>}/>
        <Route path="/spreads" element={<Spreads/>}/>
        <Route path="/swap" element={<SwapRates/>}/>
        <Route path="/over-night" element={<OverNight/>}/>
        <Route path="/trading-hours" element={<TradingHours/>}/>
        <Route path="/margin-and-leverage" element={<MarginPage/>}/>
        <Route path="/Eco-Calender" element={<EconomicCalendar/>}/>
        <Route path="/holiday" element={<Holiday/>}/>
        <Route path="/trade-of-the-weak" element={<TradeWeakLeaderboard/>}/>

        
        <Route path="/body" element={<Body />} />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
