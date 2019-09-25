import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBooking from "./index";
import  {initialState}  from "../../../../assets/mocking/initialState";
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
    const container = render(<NewBooking show={true} />);
    expect(container).toMatchSnapshot();
  });

  test("Component save changes disabled if no user input", async () => {
    const { getByText } = render(<NewBooking show={true} />);
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(true);
  });
  test("Component select station have the exact number of options", async () => {
    const { baseElement } = render(<NewBooking show={true} />);
    const options = baseElement.querySelectorAll("option");
    expect(options.length).toBe(11);
  });

  test("Component Save Changes Enabled after add both (station and payment)", async () => {
    const { getByText, getByTestId } = render(<NewBooking show={true} />);
    fireEvent.change(getByTestId("select-station"), { target: { value: 1 } });
    fireEvent.click(getByTestId("test-credit-value"));
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(false);
  });

  test("Component Save Changes Disabled after station ", async () => {
    const { getByText, getByTestId, container } = render(
      <NewBooking show={true} />
    );
    fireEvent.change(getByTestId("select-station"), { target: { value: 1 } });
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(true);
  });

  test("Component Save Changes Disabled after payment type ", async () => {
    const { getByText, getByTestId } = render(<NewBooking show={true} />);
    fireEvent.click(getByTestId("test-credit-value"));
    const action = getByText("Save Changes");
    expect(action.disabled).toBe(true);
  });
});
