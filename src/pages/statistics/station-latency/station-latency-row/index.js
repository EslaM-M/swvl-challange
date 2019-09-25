import React from "react";

function StationLatencyRow({ stationId, stationName, arrivalStatus }) {
  return (
    <tr>
      <td data-testid="station-id">{stationId}</td>
      <td data-testid="station-name">{stationName}</td>
      <td data-testid="arrival-status">{arrivalStatus}</td>
    </tr>
  );
}

export default StationLatencyRow;
