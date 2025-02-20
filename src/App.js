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
import IntroductionBroker from "./pages/IntroductionBroker";
import MultiProgram from "./pages/MultiProgram";
import AffiliateProgramme from "./pages/AffiliateProgramme";
import WhiteLabelPage from "./pages/WhiteLabelPage";
import ForexTradingPage from "./pages/ForexTradingPage";
import BasicForexPage from "./pages/BasicForexPage";
import Tradingprinciples from "./pages/TradingPrinciples";
import BestTrading from "./pages/BestTrading";
import Regulation from "./pages/Regulation";
import AboutMilestones from "./pages/AboutMilestones";
import TradingServers from "./pages/TradingServers";

import OfficeLocations from "./pages/OfficeLocation";
import PartnerTrade from "./pages/PartnerTrade";
import Awards from "./pages/Awards";
import FAQ from "./pages/FAQ";


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
        <Route path="/introduction-broker" element={<IntroductionBroker/>}/>
        <Route path="/multi-level-program" element={<MultiProgram/>}/>
        <Route path="/affiliate-programme" element={<AffiliateProgramme/>}/>
        <Route path="/white-label" element={<WhiteLabelPage/>}/>
        <Route path="/beg-forex" element={<ForexTradingPage/>}/>
        <Route path="/basic-forex" element={<BasicForexPage/>}/>
        <Route path="/tranding-principle" element={<Tradingprinciples/>}/>
        <Route path="/best-tradeing" element={<BestTrading/>}/>
        <Route path="/regulation" element={<Regulation/>}/>
        <Route path="/about" element={<AboutMilestones/>}/>
        <Route path="/trading-server" element={<TradingServers/>}/>
        {/* <Route path="/office-location" element={<Office/>}/> */}
        {/* <Route path="/office-location" element={<Office/>}/> */}
        <Route path="/office-location" element={<OfficeLocations/>}/>
        <Route path="/Partner-trade" element={<PartnerTrade/>}/>
        <Route path="/awards" element={<Awards/>}/>
        <Route path="/contactus" element={<FAQ/>}/>


        
        <Route path="/body" element={<Body />} />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
