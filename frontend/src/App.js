import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EcoCompass } from "./pages/EcoCompass"; // Updated path for EcoCompass
import './App.css'; // Import global styles if needed
import Login from "./components/Login";
import Signup from "./components/Signup";
import ESGRanking from "./components/ESGRanking";
import { CompanyHomePage } from "./pages/CompanyHomePage";
import Analysis from "./pages/Analysis";
import './styles/tailwind.css';
import FileUpload from "./components/FileUpload";
import { CallToAction } from "./components/CallToAction";
import EcoCompassGuide from "./components/EcoCompassGuide";
import Investor from "./components/Investor";

function App() {
  return (
    <Router>
      <Routes>
        {/* Render EcoCompass (which includes LandingPage) at the home route */}
        <Route path="/" element={<EcoCompass />} />

        {/* Add additional routes here if needed */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/companyhomepage" element={<CompanyHomePage />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/fileupload" element={<Analysis />} />
        <Route path="/about" element={<CallToAction />} />
        <Route path="/stepcard" element={<EcoCompassGuide />} />
        <Route path="/esgranking" element={<ESGRanking />} />
        <Route path="/investorhomepage" element={<Investor />} />

      </Routes>
    </Router>
  );
}
export default App; 
