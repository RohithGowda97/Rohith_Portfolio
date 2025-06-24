// File: src/App.js
import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app dark-mode">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;