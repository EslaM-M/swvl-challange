import React from "react";
import Card from "../../../components/card";
import CustomersPaylispTable from "./customer-paylisp-table";

function CustomersPaylisp() {
  return (
    <div>
      <Card heading="Customers Paylisp">
        <CustomersPaylispTable />
      </Card>
    </div>
  );
}

export default CustomersPaylisp;
