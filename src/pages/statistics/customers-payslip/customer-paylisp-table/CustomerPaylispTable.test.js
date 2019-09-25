import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomerPaylispTable from "./index";
import { initialState } from "../../../../assets/mocking/initialStateTwo";
describe("CustomerPaylispTable Component", () => {
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
    const container = render(<CustomerPaylispTable />);
    expect(container).toMatchSnapshot();
  });

  test("Component show the same number of booking in the state", async () => {
    const { baseElement } = render(<CustomerPaylispTable />);
    const bookings = baseElement.querySelectorAll("tr");

    expect(bookings.length).toBe(3);
  });
  test("Component show zero number of booking if there is no booking", async () => {
    initialState.bookings = [];
    useContextMock.mockReturnValue({
      state: initialState
    });
    const { baseElement } = render(<CustomerPaylispTable />);

    const bookings = baseElement.querySelectorAll("tr");
    expect(bookings.length).toBe(1);
  });
});
