import React from "react";
import styles from "./empty-card.module.css";

function EmptyCard({ message, icon }) {
  return (
      <div className={styles.container}>
      {icon}
        <h4 className={styles.message}>{message}</h4>
      </div>
  );
}

export default EmptyCard;
