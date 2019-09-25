import React from "react";
import { render } from "@testing-library/react";
import EmptyCard from "./index";
import { FaAddressBook } from "react-icons/fa";

describe("EmptyCard Component", () => {
  test("Component snapshot rednder correctly", () => {
    const container = render(
      <EmptyCard message="Empty Card" icon={<FaAddressBook />} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Component have icon and message", async () => {
    const { getByText, baseElement } = render(
      <EmptyCard message="Empty Card" icon={<FaAddressBook />} />
    );
    const message = getByText("Empty Card");
    expect(message).toBeInTheDocument();
    const icon = baseElement.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
