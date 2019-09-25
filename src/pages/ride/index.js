import React from "react";
import GoogleMaps from "./google-map";
import Booking from "./booking";
import TripInformation from "./trip-information";
import CurrentStation from "./current-station";
function Ride(props) {
  return (
    <div>
      <GoogleMaps {...props} />
      <div className="content">
        <CurrentStation/>
        <TripInformation />
        <Booking />
      </div>
    </div>
  );
}

export default Ride;
