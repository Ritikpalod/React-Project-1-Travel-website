import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from '../footer/Footer'
import ContactForm from "../contactform/ContactForm";

function contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="/assets/2.jpg"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    <Footer />

    </div>
  );
}

export default contact;
