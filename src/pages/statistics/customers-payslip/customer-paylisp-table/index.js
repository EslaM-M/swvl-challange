import React from "react";
import { Table } from "react-bootstrap";
import CustomerPaylispRow from "../customers-paylisp-row";
import { Store } from "../../../../store";
function CustomersPaylispTable() {
  const { state } = React.useContext(Store);
  const getPayLispDateFromState = () => {
    return state.bookings.filter(booking => {
      return booking.status === "Compeleted";
    });
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>Name</th>
            <th>Payment Method</th>
            <th>Paid</th>
            <th>Pickup Station</th>
          </tr>
        </thead>
        <tbody>
          {getPayLispDateFromState().map((e, i) => {
            return (
              <CustomerPaylispRow
                key={i}
                index={i}
                PaymentType={e.PaymentType}
                userId={e.userId}
                userName={e.userName}
                pickupStation={e.pickupStation}
                currency={state.baseFare.currency}
                price={state.baseFare.price}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomersPaylispTable;
