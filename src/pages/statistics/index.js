import React from "react";
import CustomersPaylisp from "./customers-payslip";
import StationLatency from "./station-latency";
import BookingSummary from "./booking-summary";
import CustomerStatus from "./customers-status";
import { Store } from "../../store";
import EmptyCard from "../../components/empty-card";
import { FaAddressBook } from "react-icons/fa";

function Statistics() {
  const { state } = React.useContext(Store);

  return (
    <div className="content">
      {state.tripStatus === "FINISHED" ? (
        <>
          <CustomersPaylisp />
          <StationLatency />
          <CustomerStatus />
          <BookingSummary />
        </>
      ) : (
        <EmptyCard
          icon={<FaAddressBook />}
          message={"There is no Available Ride To Show Statistics"}
        />
      )}
    </div>
  );
}

export default Statistics;
