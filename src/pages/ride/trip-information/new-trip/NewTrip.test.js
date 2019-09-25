import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTrip from "./index";
import { initialState } from "../../../../store/reducer";
describe("NewTrip Component", () => {
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
    const container = render(<NewTrip show={true} />);
    expect(container).toMatchSnapshot();
  });

  test("Component save changes disabled if no user input", async () => {
    const { getByText } = render(<NewTrip show={true} />);
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(true);
  });
  test("Component select station have the exact number of options", async () => {
    const { baseElement } = render(<NewTrip show={true} />);
    const options = baseElement.querySelectorAll("option");
    expect(options.length).toBe(4);
  });

  test("Component Save Changes Enabled after add both (station and payment)", async () => {
    const { getByText, getByTestId } = render(<NewTrip show={true} />);
    fireEvent.change(getByTestId("select-status"), {
      target: { value: "early" }
    });
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(false);
  });

  test("Component Save Changes Disabled after payment type ", async () => {
    const { getByText } = render(<NewTrip show={true} />);
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(true);
  });
});
