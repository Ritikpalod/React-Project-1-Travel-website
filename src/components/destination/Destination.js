import React from "react";
import './Destination.css'
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData heading="Dubai" text="Dubai is a city of awe-inspiring ambition and unsurpassed luxury,
      home to the world's tallest building, the largest shopping mall, the
      iconic Palm, and JW Marriott Marquis Hotel Dubai - the worlds
      tallest hotel. It is a place where dreams come true, as is our hotel
      in Dubai. JW Marriott Marquis Hotel Dubai offers a spectrum of
      business facilities for the most discerning travelers. We are a
      hotel in Dubai, United Arab Emirates synonymous with intuitive
      service and refined taste, and our luxury hotel's title is given
      only to the finest properties in the Marriott portfolio" img1={"/assets/hotel.jpg"} img2={"/assets/hotel2.jpg"}/>
      <DestinationData heading="Paris" text="Welcome to the place where everyone can shine their brightest!
      Since opening in 1992, Disneyland Paris® has welcomed hundreds of millions of guests through its gates, making it Europe's number-one tourist destination
      With the majestic Sleeping Beauty castle as its heart, Disneyland park is the fantastical home to five incredible lands. For 30 magical years, it's been the place where extraordinary stories come to life before your very eyes. Buckle up because you’re about to whizz around Discoveryland, Fantasyland, Frontierland, Adventureland, and Main Street U.S.A.®" img1={"/assets/disney1.jpg"} img2={"/assets/disney2.jpg"}/>
      <DestinationData heading="New York City" text="In New York City, things move fast, and there’s room for everyone (even if it’s a small studio apartment). There’s more to explore beyond Central Park—try the best pizza in the U.S. (sorry, Chicago), or authentic Cuban cuisine. Visit world-class galleries, historic landmarks, and some of the most iconic hotspots for photo ops. Then, wash off the day and renew your glow with a Kiehl’s skincare routine made for (and by) city slickers. Get swept away by the buzz of the city, and don’t worry about blending in. Here, boldness belongs." img1={"/assets/newyork1.jpg"} img2={"/assets/newyork2.jpg"}/>
    </div>
  );
};

export default Destination;
