import React from "react";
import styles from "../styles/Container.module.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GoalCard from "./GoalCard";
import ChartCircle from "./ChartCircle";
import ChartCard from "./ChartCard";
function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.container__nav}>
        <h2 className={styles.container__title}>Fitness Tracker</h2>
        <div className={styles.container__navLinks}>
          <SearchIcon className={styles.container__navLink} />
          <NotificationsActiveIcon className={styles.container__navLink} />
          <button className={styles.container__btn}>Dark Mode</button>
        </div>
      </div>
      <div className={styles.container__row}>
        <GoalCard title="Sleep" image="/moon.png" number="3" type="Hours" />
        <GoalCard
          title="Calories"
          image="/fire.png"
          number="3"
          type="Workouts"
        />
        <GoalCard title="Water" image="/drop.png" number="3" type="Liters" />
        <GoalCard
          title="Steps"
          image="/footsteps-silhouette-variant.png"
          number="3"
          type="Steps"
        />
      </div>
      <div className={styles.container__data}>
        <div className={styles.container__chartHeader}>
          <h3 className={styles.container__chartHeaderTitle}>Actvitiy</h3>
          <div className={styles.container__chartHeader}>
            <ChartCircle title="Steps" color="Steps" />
            <ChartCircle title="Sleep" color="Sleep" />
            <ChartCircle title="Calories" color="Calories" />
            <ChartCircle title="Water" color="Water" />
          </div>
        </div>
        <div className={styles.container__chartMain}>
          <div className={styles.container__chartNumbers}>
            <p className={styles.container__chartNumber}>0</p>
            <p className={styles.container__chartNumber}>10</p>
            <p className={styles.container__chartNumber}>20</p>
            <p className={styles.container__chartNumber}>30</p>
            <p className={styles.container__chartNumber}>40</p>
            <p className={styles.container__chartNumber}>50</p>
            <p className={styles.container__chartNumber}>60</p>
            <p className={styles.container__chartNumber}>70</p>
            <p className={styles.container__chartNumber}>80</p>
            <p className={styles.container__chartNumber}>90</p>
            <p className={styles.container__chartNumber}>100</p>
          </div>
          <div className={styles.container__chartMainData}>
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
            <ChartCard step="200px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
