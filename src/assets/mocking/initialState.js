// import route from "../data/route";
import tripInformation from "../data/trip-information";
export const initialState = {
  bookings: [],
  bookingAllowed: true,
  route: tripInformation.route.map(e => {
    e.count = 0;
    return e;
  }),
  captainLocation: {
    lat: null,
    lng: null
  },
  tripStatus: "NOT_STARTED",
  tripStartTime: null,
  arrivalStatus: "",
  currentStationId: null,
  fullDistance: null,
  baseFare: tripInformation.baseFare,
  startPoint: tripInformation.startPoint,
  endPoint: tripInformation.endPoint,
  driver: tripInformation.driver
};
