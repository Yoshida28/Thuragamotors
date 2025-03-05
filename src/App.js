import React from "react";
import Home from "./components/Home";
import Features from "./components/Features";
import EVShowcase from "./components/marquee";
import Carousel from "./components/Carousel.js";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PickYourThuraga from "./components/PickYourThuraga";
import FeaturesSection from "./components/whywbr";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Carousel/>
      <FeaturesSection/>
      <PickYourThuraga/>
      <EVShowcase/>
      <Footer/>
    </div>
  );
};

export default App;
