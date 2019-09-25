import React from "react";
import styles from "./basic-info.module.css";
import busImage from "../../../../assets/images/bus.png";
import driverImage from "../../../../assets/images/user1.jpg";
import { FaMapPin } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Store } from "../../../../store";

function BaicInfo() {
  const { state } = React.useContext(Store);

  return (
    <div className={styles.tripContent}>
      <div className={styles.userCarDetails}>
        <div>
          <img alt="driver" src={driverImage} className={styles.avatar} />
          <img
            alt="bus"
            src={busImage}
            className={`${styles.avatar} ${styles.overlabAvatar}`}
          />
        </div>
        <div>
          <p>
            <label data-testid="driver-name">{state.driver.name}</label>{" "}
            <FaRegStar />
            <label data-testid="driver-rating">{state.driver.rating}</label>
          </p>
          <p>
            <label data-testid="bus-modal">{state.driver.bus.modal}</label> -{" "}
            <label data-testid="bus-plate">{state.driver.bus.plate}</label>
          </p>
        </div>
      </div>

      <div className={`${styles.routeInfo}`}>
        <div className={styles.leftLine}></div>
        <div>
          <p data-testid="start-point">{state.startPoint}</p>
          <p data-testid="end-point">{state.endPoint}</p>
        </div>
      </div>
      <div className={styles.distancePrice}>
        <p>
          <FaMapPin /> Trip Distance:{" "}
          <label data-testid="distance">
            {Math.round(state.fullDistance / 1000)}
          </label>{" "}
          KM
        </p>
        <p>
          <FaDollarSign />
          Trip Base Fare:
          <label data-testid="price">{state.baseFare.price}</label>
          <label data-testid="currency">{state.baseFare.currency}</label>
        </p>
      </div>
    </div>
  );
}

export default BaicInfo;
