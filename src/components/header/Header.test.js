import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";
import headerLogo from "../../assets/images/swvl-new-logo.png";

describe("Header Component", () => {
  test("Component snapshot rednder correctly", () => {
    const container = render(<Header image={headerLogo} />);
    expect(container).toMatchSnapshot();
  });

  test("Component show the logo", async () => {
    const { getByAltText } = render(<Header image={headerLogo} />);
    const element = getByAltText("header-logo");
    expect(element).toHaveAttribute("src");
    expect(element.src).toContain("swvl-new-logo.png");
  });
});
