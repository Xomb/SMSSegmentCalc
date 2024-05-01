import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import { About } from "./components/pages/About.tsx";
import { Contact } from "./components/pages/Contact.tsx";
import { Home } from "./components/pages/Home.tsx";
import { Services } from "./components/pages/Services.tsx";
import { SMSSegmentCalc } from "./components/pages/services/SMSSegmentCalc.tsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/SMSSegmentCalc" element={<SMSSegmentCalc />} />
      </Routes>
    </div>
  );
}

export default App;
