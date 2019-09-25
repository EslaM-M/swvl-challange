import blueImage from "../../../assets/images/blue.png";
import redImage from "../../../assets/images/red.png";
import moveImage from "../../../assets/images/move.png";
export const calculateDistanceBetweenTwoPoints = (
  googleMaps,
  firstPoint,
  secondPoint
) => {
  let fullDistance = googleMaps.geometry.spherical.computeDistanceBetween(
    new googleMaps.LatLng(firstPoint.lat, firstPoint.lng),
    new googleMaps.LatLng(secondPoint.lat, secondPoint.lng)
  );
  return fullDistance;
};

export const addDistanceBetweenEveryPointInPath = (
  googleMaps,
  route,
  fullDistance,
  rideDuration
) => {
  const velocity = fullDistance / (rideDuration * 60);
  const newPath = route.map((coordinates, i, array) => {
    if (i === 0) {
      return { ...coordinates, distance: 0, expectedTime: 0 }; // it begins here!
    }
    const { lat: lat1, lng: lng1 } = coordinates;
    const latLong1 = new googleMaps.LatLng(lat1, lng1);

    const { lat: lat2, lng: lng2 } = array[0];
    const latLong2 = new googleMaps.LatLng(lat2, lng2);
    // in meters:
    const distance = googleMaps.geometry.spherical.computeDistanceBetween(
      latLong1,
      latLong2
    );

    const expectedTime = distance / velocity;

    return { ...coordinates, distance, expectedTime };
  });
  return newPath;
};

export const getImageBasedOnPointType = (i, length) => {
  if (i === 0) {
    return redImage;
  } else if (i === length - 1) {
    return moveImage;
  } else {
    return blueImage;
  }
};
