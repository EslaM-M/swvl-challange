import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomerStatusRow from "./index";
describe("TripBasicInfo Component", () => {
  test("Component snapshot render correctly", () => {
    const container = render(
      <table>
        <tbody>
          <CustomerStatusRow
            index={0}
            userName="Ali"
            userId="454"
            status="Canceled"
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
          <CustomerStatusRow
            index={0}
            userName="Ali"
            userId="454"
            status="Canceled"
          />
        </tbody>
      </table>
    );
    expect(getByTestId("index").innerHTML).toBe("1");
    expect(getByTestId("user-id").innerHTML).toBe("454");
    expect(getByTestId("user-name").innerHTML).toBe("Ali");
    expect(getByTestId("status").innerHTML).toBe("Canceled");
  });
});
