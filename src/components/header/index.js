import React from "react";
import styles from "./header.module.css";
function Header({ image }) {
  return (
    <div className={styles.header}>
      <img
        alt="header-logo"
        src={image}
        className={styles.logo}
      />
    </div>
  );
}

export default Header;
