import React from "react";
import styles from "../styles/GoalCard.module.css";
import CSSModules from "react-css-modules";
import cn from "classnames";
function GoalCard({ title, image, number }) {
  
  return (
    <div
    className={`${styles.goalCard } ${styles.Steps}   `}>
      <img className={styles.goalCard__icon} src={`${image}`} alt="" />
      <div className={styles.goalCard__infoContainer}>
        
        <h2>{number}</h2>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default GoalCard;
