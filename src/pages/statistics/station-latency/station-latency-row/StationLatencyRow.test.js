import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StationLatencyRow from "./index";
describe("StationLatencyRow Component", () => {
  test("Component snapshot render correctly", () => {
    const container = render(
      <table>
        <tbody>
          <StationLatencyRow
            stationId="1"
            arrivalStatus="early"
            stationName="station1"
          />
        </tbody>
      </table>
    );
    expect(container).toMatchSnapshot();
  });

  test("Component Render Data Correctly", async () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <StationLatencyRow
            stationId="1"
            arrivalStatus="early"
            stationName="station1"
          />
        </tbody>
      </table>
    );
    expect(getByTestId("station-id").innerHTML).toBe("1");
    expect(getByTestId("arrival-status").innerHTML).toBe("early");
    expect(getByTestId("station-name").innerHTML).toBe("station1");
  });
});
