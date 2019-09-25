import React, { useEffect, useContext } from "react";
import Header from "../components/header";
import TripInfo from "../assets/data/trip-information";
import logo from "../assets/images/swvl-new-logo.png";
import { Store } from "../store";
import styles from "./global.module.css";

function Main() {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: "LOAD_STATE", payload: TripInfo });
  }, []);

  return (
    <>
      <Header image={logo} />
    </>
  );
}

export default Main;
