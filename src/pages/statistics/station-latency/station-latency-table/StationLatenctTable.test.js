import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StationLatencyTable from "./index";
import { initialState } from "../../../../assets/mocking/initialStateTwo";
describe("StationLatencyTable Component", () => {
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
    const container = render(<StationLatencyTable />);
    expect(container).toMatchSnapshot();
  });

  test("Component show the same number of booking in the state", async () => {
    const { baseElement } = render(<StationLatencyTable />);
    const bookings = baseElement.querySelectorAll("tr");

    expect(bookings.length).toBe(11);
  });
  test("Component show zero number of booking if there is no booking", async () => {
    initialState.route = [];
    useContextMock.mockReturnValue({
      state: initialState
    });
    const { baseElement } = render(<StationLatencyTable />);

    const bookings = baseElement.querySelectorAll("tr");
    expect(bookings.length).toBe(1);
  });
});
