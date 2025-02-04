import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/home";
import Body from "./components/body";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AccountTypes from "./pages/AccountTypes";
import VipAccount from "./pages/VipAccount";
import RoboTrading from "./pages/RoboTrading";

function App() {
  return (
    <Router> 
      <Navbar /> {/* ✅ Navbar should always be displayed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounttype" element={<AccountTypes />} />
        <Route path="/vipaccount" element={<VipAccount/>}/>
        <Route path="/robotrading" element={<RoboTrading/>}/>
        <Route path="/body" element={<Body />} />
        
      </Routes>
      <Footer /> {/* ✅ Footer should always be displayed */}
    </Router>
  );
}

export default App;
