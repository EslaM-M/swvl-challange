import React, { useState } from "react";
import Card from "../../../components/card";
import styles from "./booking.module.css";
import { Store } from "../../../store";
import NewBooking from "./new-booking";
import { FaAddressBook } from "react-icons/fa";
import EmptyCard from "../../../components/empty-card";
import BookingItem from "./booking-item";

function Booking() {
  const showModal = () => {
    setShowBookModal(true);
  };

  const closeModal = () => {
    setShowBookModal(false);
  };
  const { state } = React.useContext(Store);
  const [showBookModal, setShowBookModal] = useState(false);
  const bookings = state.bookings;
  const isBookingEmpty = () => {
    return bookings.length === 0;
  };
  return (
    <>
      <Card heading="Bookings" action={showModal} actionName="New Book">
        <div className={styles.container}>
          {bookings.map(booking => {
            return (
              <BookingItem
                key={booking.userId}
                status={booking.status}
                userId={booking.userId}
                userImage={booking.userImage}
                userName={booking.userName}
              />
            );
          })}
        </div>
      </Card>
      {isBookingEmpty() && (
        <div>
          <EmptyCard
            icon={<FaAddressBook />}
            message={"Add New Booking To Start Your Trip"}
          />
        </div>
      )}

      <NewBooking show={showBookModal} closeModal={closeModal} />
    </>
  );
}

export default Booking;
