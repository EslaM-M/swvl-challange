import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomerPaylispRow from "./index";
describe("CustomerPaylispRow Component", () => {
  test("Component snapshot render correctly", () => {
    const container = render(
      <table>
        <tbody>
          <CustomerPaylispRow
            index={0}
            PaymentType="credit"
            currency="EGP"
            price="45"
            pickupStation="1"
            userId="244"
            userName="Amr Hassan"
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
        <CustomerPaylispRow
            index={0}
            PaymentType="credit"
            currency="EGP"
            price="45"
            pickupStation="1"
            userId="244"
            userName="Amr Hassan"
          />
        </tbody>
      </table>
    );
    expect(getByTestId("index").innerHTML).toBe("1");
    expect(getByTestId("user-id").innerHTML).toBe("244");
    expect(getByTestId("user-name").innerHTML).toBe("Amr Hassan");
    expect(getByTestId("payment-type").innerHTML).toBe("credit");
    expect(getByTestId("price").innerHTML).toBe("45");
    expect(getByTestId("currency").innerHTML).toBe("EGP");
    expect(getByTestId("station").innerHTML).toBe("Station1");
  });
});
