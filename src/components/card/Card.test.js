import React from "react";
import { render } from "@testing-library/react";
import Card from "./index";
describe("Card Component", () => {
  test("Component snapshot render correctly", () => {
    const container = render(
      <Card
        heading="heading"
        subHeading="subheading"
        action={() => {}}
        isActionDisabled={false}
        actionName="action"
      >
        <h1>Childeren</h1>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });

  test("Component show all the elements correctly", async () => {
    const { getByText } = render(
      <Card
        heading="heading"
        subHeading="subheading"
        action={() => {}}
        isActionDisabled={false}
        actionName="action"
      >
        <h1>Children</h1>
      </Card>
    );
    const heading = getByText("heading");
    const subheading = getByText("subheading");
    const actionName = getByText("action");
    const children = getByText("Children");

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
    expect(actionName).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
  test("Component didn't have subheading", async () => {
    const { queryByTestId } = render(
      <Card heading="heading">
        <h1>Children</h1>
      </Card>
    );
    const subheading = queryByTestId("sub-heading");
    expect(subheading).toBeNull();
  });

  test("Component action disabled", async () => {
    const { getByText } = render(
      <Card heading="heading" isActionDisabled={true} actionName="action">
        <h1>Children</h1>
      </Card>
    );
    const action = getByText("action");
    expect(action.disabled).toBe(true);
  });
  test("Component action Enabled", async () => {
    const { getByText } = render(
      <Card heading="heading" isActionDisabled={false} actionName="action">
        <h1>Children</h1>
      </Card>
    );
    const action = getByText("action");
    expect(action.disabled).toBe(false);
  });
});
