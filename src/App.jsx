import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { About } from "./components/pages/About.jsx";
import { Contact } from "./components/pages/Contact.jsx";
import { Home } from "./components/pages/Home.jsx";
import { Services } from "./components/pages/Services.jsx";
import { SMSSegmentCalc } from "./components/pages/services/SMSSegmentCalc.jsx";
// import { TextCounterV2 } from "./components/pages/TextCounterV2.js";

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
        {/* <Route path="/TextCounterV2" element={<TextCounterV2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
