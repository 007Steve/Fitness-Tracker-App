import React from "react";
import styles from "../styles/ChartCard.module.css";
function ChartCard({ step }) {
  const steps = {
    height: `${step}`,
  };
  return (
    <div className={styles.chartCard}>
      <div className={styles.chartCard__container}>
        <div className={`${styles.chartCard__input} ${styles.Steps} `}></div>
        <div className={`${styles.chartCard__input} ${styles.Water}`}></div>
        <div className={`${styles.chartCard__input} ${styles.Calories}`}></div>
        <div className={`${styles.chartCard__input} ${styles.Sleep}`}></div>
      </div>
      <h5>Aug 10 </h5>
    </div>
  );
}

export default ChartCard;
