import React from "react";
import { Store } from "../../../store";
import styles from "./current-station.module.css";
function CurrentStation() {
  const { state } = React.useContext(Store);
  const getStationName = React.useMemo(() => {
    const e = state.route.find(e => {
      if (e.stationId === state.currentStationId) {
        return e;
      }
      else {
        return null
      }
    });
    if (e) {
      return `Current Station: ${e.stationName}`;
    } else {
      return null;
    }
  }, [state.currentStationId]);

  return (
    <div className={styles.container}>
      <h3>{getStationName}</h3>
    </div>
  );
}

export default CurrentStation;
