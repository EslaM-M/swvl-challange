import React from "react";
import Card from "../../../components/card";
import { Bar } from "react-chartjs-2";
import { Store } from "../../../store";
function BookingSummary() {
  const { state } = React.useContext(Store);
  console.log(state);
  const getStationsLables = ({route}) => {
    return route.map(e => {
      return e.stationName;
    });
  }
  const getStationsBookingCount = ({route})=>{
    const stationCount =  route.map(e => {
      return e.count;
    });
    console.log(stationCount);
    return stationCount;
  }
 
  let data = {
    labels: getStationsLables(state),
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: getStationsBookingCount(state)
      }
    ]
  };

  return (
    <Card heading="Booking summary">
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false
        }}
      />
    </Card>
  );
}

export default BookingSummary;
