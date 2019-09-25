import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TripBasicInfo from "./index";
import { initialState } from "../../../../assets/mocking/initialState";
describe("TripBasicInfo Component", () => {
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
    const container = render(<TripBasicInfo />);
    expect(container).toMatchSnapshot();
  });

  test("Component Render Data Correctly", async () => {
    const { getByTestId } = render(<TripBasicInfo />);
    expect(getByTestId("driver-name").innerHTML).toBe("Herbert Patton");
    expect(getByTestId("driver-rating").innerHTML).toBe("5");
    expect(getByTestId("bus-modal").innerHTML).toBe("Toyota HiAce");
    expect(getByTestId("bus-plate").innerHTML).toBe("GA 2770");
    expect(getByTestId("start-point").innerHTML).toBe("The 5th Settlement");
    expect(getByTestId("end-point").innerHTML).toBe("Almazah");
    expect(getByTestId("distance").innerHTML).toBe("0");
    expect(getByTestId("price").innerHTML).toBe("45");
    expect(getByTestId("currency").innerHTML).toBe("EGP");
  });
});
