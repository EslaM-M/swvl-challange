import React from "react";
import Card from "../../../components/card";
import { Container, Row, Col } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { Store } from "../../../store";
import CustomerStatusTable from "./customer-status-table";

function CustomerStatus() {
  const { state } = React.useContext(Store);

  const getCustomersGroupByCheckedStatus = () => {
    let data = [0, 0, 0];
    state.bookings.forEach(element => {
      if (element && element.status) {
        switch (element.status) {
          case "Compeleted":
            data[0]++;
            break;
          case "Canceled":
            data[1]++;
            break;
          case "Missed":
            data[2]++;
            break;
          default:
            break;
        }
      }
    });
    return data;
  };
  const data = {
    labels: ["Compeleted", "Canceled,", "Missed"],
    datasets: [
      {
        data: getCustomersGroupByCheckedStatus(),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return (
    <Card heading="Customer Status">
      <Container>
        <Row>
          <Col>
            <CustomerStatusTable />
          </Col>
          <Col>
            <Doughnut data={data} options={{ maintainAspectRatio: false }} />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default CustomerStatus;
