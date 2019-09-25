import React, { useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";
import busImage from "../../../assets/images/bus.png";
import { Store } from "../../../store";
import {
  calculateDistanceBetweenTwoPoints,
  addDistanceBetweenEveryPointInPath,
  getImageBasedOnPointType
} from "./Utils";

function GoogleMaps(props) {
  const { state, dispatch } = React.useContext(Store);
  let velocity = 500;
  let interval = null;
  let currentProgress = 0;

  const getDistance = () => {
    const differentInTime = (new Date() - new Date(state.tripStartTime)) / 1000;
    return differentInTime * velocity;
  };

  const moveObject = () => {
    const distance = getDistance();
    if (!distance || state.tripStatus === "NOT_STARTED") {
      return;
    }

    let progress = state.route.filter(
      coordinates => coordinates.distance < distance
    );

    const nextLine = state.route.find(
      coordinates => coordinates.distance > distance
    );

    if (progress.length > currentProgress) {
      dispatch({
        type: "UPDATE_STATION",
        payload: {
          id: progress[progress.length - 1].stationId,
          time: (new Date() - state.tripStartTime) / 1000 // pass to secondstime :
        }
      });
    }
    if (!nextLine) {
      clearInterval(interval);
      if (state.tripStatus === "IN_PROGRESS") {
        dispatch({ type: "END_TRIP" });
        props.history.push("/statistics");
      }
      return;
    }
    if (progress.length > currentProgress) {
      clearInterval(interval);
      currentProgress = progress.length;
      restartAfter();
    }
    const lastLine = progress[progress.length - 1];

    const lastLineLatLng = new window.google.maps.LatLng(
      lastLine.lat,
      lastLine.lng
    );

    const nextLineLatLng = new window.google.maps.LatLng(
      nextLine.lat,
      nextLine.lng
    );
    // distance of this line
    const totalDistance = nextLine.distance - lastLine.distance;
    const percentage = (distance - lastLine.distance) / totalDistance;

    const position = window.google.maps.geometry.spherical.interpolate(
      lastLineLatLng,
      nextLineLatLng,
      percentage
    );

    dispatch({
      type: "UPDATE_LOCATION",
      payload: {
        lat: position.lat(),
        lng: position.lng()
      }
    });
  };
  const restartAfter = function() {
    setTimeout(() => {
      interval = window.setInterval(moveObject, 100);
    }, 1000);
  };

  useEffect(() => {
    interval = window.setInterval(moveObject, 100);
  }, [state.tripStatus]);

  //effect run at the first time for calculate distance between each point
  useEffect(() => {
    if (state.tripStatus === "NOT_STARTED" && state.route.length > 0) {
      let fullDistance = calculateDistanceBetweenTwoPoints(
        window.google.maps,
        state.route[0],
        state.route[state.route.length - 1]
      );
      const newPath = addDistanceBetweenEveryPointInPath(
        window.google.maps,
        state.route,
        fullDistance
      );
      dispatch({ type: "UPDATE_ROUTE_DISTANCE", payload: newPath });
      dispatch({ type: "UPDATE_FULL_DISTANCE", payload: fullDistance });
    }
  }, [state.startPoint]);

  return (
    <div>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 30.08201257054215, lng: 31.343882169980134 }}
      >
        {state.route.map((e, i) => {
          return (
            <Marker
              position={new window.google.maps.LatLng(e.lat, e.lng)}
              key={i}
              icon={{
                url: getImageBasedOnPointType(i, state.route.length),
                scaledSize: new window.google.maps.Size(25, 25)
              }}
            />
          );
        })}

        <Marker
          position={state.captainLocation}
          icon={{
            url: busImage,
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        />
        <Polyline
          path={state.route}
          geodesic={true}
          options={{
            strokeColor: "#ff2527",
            strokeOpacity: 0.75,
            strokeWeight: 2,
            icons: [
              {
                offset: "0",
                repeat: "20px"
              }
            ]
          }}
        />
      </GoogleMap>
    </div>
  );
}

const MapComponent = withScriptjs(withGoogleMap(GoogleMaps));

export default props => {
  return (
    <MapComponent
      {...props}
      googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=AIzaSyB8gB1OplUy7kvSNC9Cuad1yW4DoyfcobA&v=3.exp"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px`, width: "100%" }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};
