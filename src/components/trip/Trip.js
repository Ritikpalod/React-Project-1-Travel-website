import React from "react";
import "./Trip.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps</p>
      <div className="trip-card">
        <TripData
          image={"/assets/bali.jpg"}
          heading="Trip to Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image={"/assets/singapore.jpg"}
          heading="Trip to Singapore"
          text="Visit Singapore City , a dynamic city, rich in contrast and colo r with its mix of vibrant cultures, awe-inspiring architecture, charming shopping lanes, lush gardens and much more!. Then fly to Bali, known as 'the island of the gods', land of a thousand temples, spectacular scenery, beautiful beaches. "
        />{" "}
        <TripData
          image={"/assets/sa2.jpg"}
          heading="Trip to South Africa"
          text="South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope. "
        />
      </div>
    </div>
  );
}

export default Trip;
