import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Booking from "./index";
import { initialState } from "../../../assets/mocking/initialStateTwo";
describe("NewBooking Component", () => {
  let realUseContext;
  let useContextMock;
  // Setup mock
  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
    useContextMock.mockReturnValue({
      state: initialState
    });
  });
  // Cleanup mock
  afterEach(() => {
    React.useContext = realUseContext;
  });

  test("Component snapshot render correctly", () => {
    const container = render(<Booking />);
    expect(container).toMatchSnapshot();
  });

  test("Component show the same number of booking in the state", async () => {
    const { getByText, baseElement } = render(<Booking />);
    const bookings = baseElement.querySelectorAll(".userBooking");
    expect(bookings.length).toBe(4);
  });
  test("Component show zero number of booking if there is no booking", async () => {

    initialState.bookings = [];
    useContextMock.mockReturnValue({
      state: initialState
    });

    const { getByText, baseElement } = render(<Booking />);

    const bookings = baseElement.querySelectorAll(".userBooking");
    const emptyCard = getByText("Add New Booking To Start Your Trip");
    expect(bookings.length).toBe(0);
    expect(emptyCard).toBeInTheDocument();
  });
});
