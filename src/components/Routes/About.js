import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from '../footer/Footer'
import AboutUs from "../about/AboutUs";


function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="/assets/night.jpg"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
    <Footer />
    </div>
  );
}

export default About;
