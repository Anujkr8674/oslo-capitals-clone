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
        <Route path="/body" element={<Body />} />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
