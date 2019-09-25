import {
  AddBooking,
  UpdateRouteDistance,
  UpdateLocation,
  StartTrip,
  UpdateStation,
  UpdateFullDistance,
  LoadState,
  EndTrip,
  RestTrip,
  UpdateTripInfo
} from "./Actions";
export const initialState = {
  bookings: [],
  bookingAllowed: true,
  route: [],
  captainLocation: {
    lat: null,
    lng: null
  },
  tripStatus: "NOT_STARTED",
  tripStartTime: null,
  arrivalStatus: "",
  currentStationId: null,
  fullDistance: null,
  baseFare: {
    price: "",
    currency: ""
  },
  startPoint: "",
  endPoint: "",
  driver: {
    name: "",
    rating: "",
    bus: {
      modal: "",
      plate: ""
    }
  }
};


export function reducer(state, action) {
  switch (action.type) {
    case "ADD_BOOKING":
      return AddBooking(state, action.payload);
    case "UPDATE_ROUTE_DISTANCE":
      return UpdateRouteDistance(state, action.payload);
    case "UPDATE_LOCATION":
      return UpdateLocation(state, action.payload);
    case "START_TRIP":
      return StartTrip(state, action.payload);
    case "UPDATE_TRIP_INFO":
      return UpdateTripInfo(state, action.payload);
    case "UPDATE_STATION":
      return UpdateStation(state, action.payload);
    case "UPDATE_FULL_DISTANCE":
      return UpdateFullDistance(state, action.payload);
    case "END_TRIP":
      return EndTrip(state, action.payload);
    case "LOAD_STATE":
      return LoadState(state,action.payload);
    case "REST_TRIP":
      return RestTrip(state);
    default:
      return state;
  }
}
