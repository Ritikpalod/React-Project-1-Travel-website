import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Destination from '../destination/Destination'
import Trip from '../trip/Trip'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div> 
    <Navbar />
    <Hero cName="hero" heroImg="./assets/travel3.jpg"
    title="Your Journey Your Style" text="Choose Your Destination."
    buttonText="Travel Plan" url="/"
    btnClass="show"/>
    <Destination />
    <Trip />
    <Footer />
    </div>
  )
}

export default Home