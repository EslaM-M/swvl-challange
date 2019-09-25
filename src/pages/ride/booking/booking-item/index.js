import React from "react";
import styles from "./booking-item.module.css";
function BookingItem({ userId, userName, status, userImage }) {
  return (
    <div className={styles.userBooking}>
      <div>
        <img alt="user-image" src={userImage} className={styles.avatar} />
      </div>
      <div>
        <p  data-testid="user-name">{userName}</p>
        <p>
          <label  data-testid="user-id">{userId}</label> <label  data-testid="booking-status">{status}</label>
        </p>
      </div>
    </div>
  );
}

export default BookingItem;
