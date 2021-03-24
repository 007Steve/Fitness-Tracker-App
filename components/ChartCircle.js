import React from "react";
import styles from "../styles/ChartCircle.module.css";
function ChartCircle({ title, color }) {
  return (
    <div className={styles.chartCircle}>
      <div className={styles.chartCircle__chartHeaderInfo}>
        <span className={`${styles.chartCircle__dot} ${styles[color]}`}></span>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ChartCircle;
