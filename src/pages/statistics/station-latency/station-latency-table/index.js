import React from "react";
import { Table } from "react-bootstrap";
import { Store } from "../../../../store";
import StationLatencyRow from "../station-latency-row";

function StationLatencyTable() {
  const { state } = React.useContext(Store);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {state.route.map(e => {
          return (
            <StationLatencyRow
              key={e.stationId}
              stationId={e.stationId}
              stationName={e.stationName}
              arrivalStatus={e.arrivalStatus}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default StationLatencyTable;
