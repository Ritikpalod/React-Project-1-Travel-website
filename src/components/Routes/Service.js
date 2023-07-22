import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Trip from '../trip/Trip'

import Footer from '../footer/Footer'

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="/assets/services.jpg"
        title="Service"
        btnClass="hide"
      />
      <Trip />
    <Footer />

    </div>
  );
}

export default Service;
