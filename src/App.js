import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";
import { SMSSegmentCalc } from './components/pages/services/SMSSegmentCalc';

function App() {
  return (<div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/Services" element={<Services />}/>
      <Route path="/services/SMSSegmentCalc" element={<Services />}/>
    </Routes>
  </div>
  );
}

export default App;
