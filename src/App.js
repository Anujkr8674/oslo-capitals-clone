// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
// import Home from "./pages/home";
// import Body from "./components/body";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";

// import AccountTypes from "./pages/AccountTypes";

// function App() {
//   return (
//     <Router> {/* Wrap everything inside BrowserRouter */}
    
//       <Routes>
//         {/* Define unique paths for each route */}
//         <Route path="/navbar" element={<Navbar />} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="/body" element={<Body />} />
//         <Route path="/" element={<Home />} /> {/* Default route */}
//         <Route path="/accounttype" element={<AccountTypes/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// import Home from "./pages/home";
// import Body from "./components/body";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import AccountTypes from "./pages/AccountTypes";

// function App() {
//   return (
//     <Router> 
//       <Navbar /> 
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Default route */}
//         <Route path="/accounttype" element={<AccountTypes />} />
//         <Route path="/body" element={<Body />} />
//       </Routes>
//       <Footer /> 
//     </Router>
//   );
// }

// export default App;





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
