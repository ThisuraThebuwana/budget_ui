import React from "react";
import './App.css';
import Home from "./components/pages/Home";
import Notifications from "./components/pages/Notifications";
import Messages from "./components/pages/Messages";
import Settings from "./components/pages/Settings";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
