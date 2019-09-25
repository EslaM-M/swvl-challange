import React from "react";
import { render } from "@testing-library/react";
import BookingItem from "./index";
import { image1 } from "../../../../assets/images/users";
describe("TripBasicInfo Component", () => {
  test("Component snapshot render correctly", () => {
    const container = render(
      <BookingItem
        status="Completed"
        userName="Eslam Mostafa"
        userId="493"
        userImage={image1}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("Component Render Data Correctly", async () => {
    const { getByTestId, getByAltText } = render(
      <BookingItem
        status="Completed"
        userName="Eslam Mostafa"
        userId="493"
        userImage={image1}
      />
    );
    const userImage = getByAltText("user-image");
    const bookingStatus = getByTestId("booking-status");
    const userName = getByTestId("user-name");
    const userId =  getByTestId("user-id");

    expect(userImage.src).toContain("1.jpg");
    expect(bookingStatus.innerHTML).toBe("Completed");
    expect(userName.innerHTML).toBe("Eslam Mostafa");
    expect(userId.innerHTML).toBe("493");

  });
});
