import React from "react";
import Card from "../../../components/card";
import {  Container, Row, Col } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Store } from "../../../store";
import StationLatencyTable from "./station-latency-table";

function StationLatency() {
  const { state } = React.useContext(Store);

  const getStationCountGroupByLatency = () => {
    let data = [0, 0, 0];
    state.route.forEach(element => {
      if (element && element.arrivalStatus) {
        switch (element.arrivalStatus) {
          case "early":
            data[0]++;
            break;
          case "ontime":
            data[1]++;
            break;
          case "late":
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
    labels: ["Early", "ON Time", "Late"],
    datasets: [
      {
        data: getStationCountGroupByLatency(),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  return (
    <Card heading="Stations Latency">
      <Container>
        <Row>
          <Col>
            <StationLatencyTable />
          </Col>
          <Col>
            <Pie data={data} options={{ maintainAspectRatio: false }} />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default StationLatency;
