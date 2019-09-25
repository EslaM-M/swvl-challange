import React from "react";
import styles from "./card.module.css";
import { Button } from "react-bootstrap";
function Card({
  heading,
  subHeading,
  action,
  actionName,
  children,
  isActionDisabled
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {heading}
        {actionName && (
          <Button
            onClick={() => {
              action();
            }}
            disabled={isActionDisabled}
          >
            {actionName}
          </Button>
        )}
      </div>

      {subHeading && <div  data-testid="sub-heading" className={styles.subHeader}>{subHeading}</div>}
      <>{children}</>
    </div>
  );
}

export default Card;
