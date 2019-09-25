import React, { useState } from "react";
import Card from "../../../components/card";
import { Store } from "../../../store";
import NewTrip from "./new-trip";
import BaicInfo from "./basic-info";

function TripInformation(props) {
  const { state, dispatch } = React.useContext(Store);
  const [showBookModal, setShowBookModal] = useState(false);

  const showModal = () => {
    console.log('show modal');
    if (state.tripStatus === "FINISHED") {
      dispatch({ type: "REST_TRIP" });
    } else {
      setShowBookModal(true);
    }
  }

  const getDateFormat = React.useMemo(() => {
    if (state.tripStartTime) {
      let date = new Date(state.tripStartTime);
      return `${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
    } else {
      return "";
    }
  }, [state.tripStartTime]);

  const closeModal = () => {
    setShowBookModal(false);
  };

  const isActionDisabled = React.useMemo(() => {
    return state.bookings.length === 0 || state.tripStatus === "IN_PROGRESS";
  }, [state.bookings.length, state.tripStatus]);

  const getActionName = React.useMemo(() => {
    return state.tripStatus === "NOT_STARTED" ||
      state.tripStatus === "IN_PROGRESS"
      ? "Start Trip"
      : "Rest Trip";
  }, [state.tripStatus]);
  return (
    <>
      <Card
        heading="Trip Information"
        subHeading={getDateFormat}
        action={showModal}
        actionName={getActionName}
        isActionDisabled={isActionDisabled}
      >
        <BaicInfo />
      </Card>
      <NewTrip show={showBookModal} closeModal={closeModal} />
    </>
  );
}

export default TripInformation;
