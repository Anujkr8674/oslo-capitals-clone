import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountTypes from "./pages/AccountTypes";
import VipAccount from "./pages/VipAccount";
import RoboTrading from "./pages/RoboTrading";

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounttype" element={<AccountTypes />} />
        <Route path="/vipaccount" element={<VipAccount />} />
        <Route path="/robotrading" element={<RoboTrading />} />
        <Route path="/body" element={<Body />} />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
