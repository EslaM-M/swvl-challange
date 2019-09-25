import React from "react";
import { Table } from "react-bootstrap";
import { Store } from "../../../../store";
import CustomerStatusRow from "../customer-status-row";

function CustomerStatusTable() {
  const { state } = React.useContext(Store);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Code</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {state.bookings.map((e, i) => {
          return (
            <CustomerStatusRow
              key={i}
              index={i}
              status={e.status}
              userId={e.userId}
              userName={e.userName}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default CustomerStatusTable;
