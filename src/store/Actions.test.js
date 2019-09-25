import React from "react";
import { AddBooking, UpdateRouteDistance } from "./Actions";
import { initialState } from "../assets/mocking/initialState";
import { initialStateThree } from "../assets/mocking/initialStateThree";
describe("User Actions", () => {
  test("AddBooking to the booking list", () => {
    const newState = AddBooking(initialState, {
      pickupStation: 1,
      PaymentType: "credit"
    });

    let selectedStation = newState.route.find(station => {
      if (station.stationId === 1) return station;
    });

    expect(newState.bookings.length).toBe(1);
    expect(selectedStation.count).toBe(1);
  });
  test("AddBooking is not allowed if the number of bookings is 12", () => {
    expect(initialStateThree.bookings.length).toBe(12);

    const newState = AddBooking(initialStateThree, {
      pickupStation: 1,
      PaymentType: "credit"
    });

    expect(newState.bookings.length).toBe(12);
  });

  test("UpdateRouteDistance update the distance between each station", () => {
    const newRoute = [
      {
        stationName: "station8",
        stationId: 8,
        lat: 30.0619822837204,
        lng: 31.34523262262769,
        distance: 0
      },
      {
        stationName: "station9",
        stationId: 9,
        lat: 30.073225027534153,
        lng: 31.343785066473743,
        distance: 200
      },
      {
        stationName: "station10",
        stationId: 10,
        lat: 30.08201257054215,
        lng: 31.343882169980134,
        distance: 1000
      }
    ];
    const newState = UpdateRouteDistance(initialState, [...newRoute]);
    expect(newState.route).toEqual(expect.arrayContaining(newState.route));
    expect(newState.captainLocation.lat).toEqual(newRoute[0].lat);
    expect(newState.captainLocation.lng).toEqual(newRoute[0].lng);
  });
});
