import Users from "../assets/data/users";
import TripInformation from "../assets/data/trip-information";
import BookingStatus from "../assets/data/booking-status";
import { initialState } from "./reducer";

export const AddBooking = (state, payload) => {
  if (state.bookings.length === 12) {
    return state;
  }
  payload = {
    ...payload,
    userName: Users[state.bookings.length].name,
    userImage: Users[state.bookings.length].image,
    userId: Math.random()
      .toString()
      .substr(2, 4),
    status: "Booked"
  };
  let bookingAllowed = true;
  if (state.bookings.length === 11) {
    bookingAllowed = false;
  }

  const stationsUpdate = state.route.map(e => {
    if (parseInt(e.stationId) === parseInt(payload.pickupStation)) {
      e.count++;
    }
    return e;
  });
  return {
    ...state,
    bookings: [...state.bookings, payload],
    bookingAllowed: bookingAllowed,
    route: stationsUpdate
  };
};

export const UpdateRouteDistance = (state, payload) => {
  return {
    ...state,
    route: [...payload],
    captainLocation: {
      ...state.captainLocation,
      lat: payload[0].lat,
      lng: payload[0].lng
    }
  };
};

export const UpdateLocation = (state, payload) => {
  const newState = {
    ...state,
    captainLocation: {
      ...state.captainLocation,
      lat: payload.lat,
      lng: payload.lng
    }
  };
  localStorage.setItem("root", JSON.stringify(newState));
  return newState;
};

export const LoadState = (state, payload) => {
  let newState = JSON.parse(localStorage.getItem("root"));
  if (!newState) {
    newState = {
      ...initialState,
      route: payload.route.map(e => {
        e.count = 0;
        return e;
      }),
      startPoint: payload.startPoint,
      tripStatus: "NOT_STARTED",
      endPoint: payload.endPoint,
      driver: payload.driver,
      baseFare: payload.baseFare
    };
  }
  return newState;
};

export const StartTrip = (state, payload) => {
  return {
    ...state,
    tripStatus: "IN_PROGRESS",
    arrivalStatus: payload.arrivalStatus,
    tripStartTime: new Date()
  };
};
export const EndTrip = (state, payload) => {
  let newState = {
    ...state,
    tripStatus: "FINISHED",
    bookings: state.bookings.map(e => {
      if (e.status === "Checked In") {
        e.status = "Compeleted";
      }
      return e;
    })
  };
  localStorage.setItem("root", JSON.stringify(newState));
  return newState;
};

export const RestTrip = (state, payload) => {
  const newState = {
    ...state,
    bookings: [],
    tripStatus: "NOT_STARTED",
    bookingAllowed: true,
    tripStartTime: null,
    arrivalStatus: "",
    captainLocation: {
      lat: TripInformation.route[0].lat,
      lng: TripInformation.route[0].lng
    },
    route: state.route.map(e => {
      e.count = 0;
      return e;
    }),
    currentStationId: null
  };
  localStorage.setItem("root", JSON.stringify(newState));

  return newState;
};

export const UpdateStation = (state, payload) => {
  const newBookings = state.bookings.map(e => {
    if (parseInt(e.pickupStation) === parseInt(payload.id)) {
      e.status = BookingStatus[Math.floor(Math.random() * 3) + 1];
    }
    return e;
  });
  const newRoute = state.route.map(e => {
    if (e.stationId === payload.id) {
      e.arrivalTime = payload.time;
      if (state.arrivalStatus === "early") {
        e.arrivalStatus = ["early", "ontime"][Math.floor(Math.random() * 2)];
      } else if (state.arrivalStatus === "ontime") {
        e.arrivalStatus = ["early", "ontime", "late"][
          Math.floor(Math.random() * 3)
        ];
      } else if (state.arrivalStatus === "late") {
        e.arrivalStatus = ["ontime", "late"][Math.floor(Math.random() * 2)];
      }
    }
    return e;
  });
  return {
    ...state,
    currentStationId: payload.id,
    bookings: [...newBookings],
    route: [...newRoute]
  };
};

export const UpdateFullDistance = (state, payload) => {
  return {
    ...state,
    fullDistance: payload
  };
};
