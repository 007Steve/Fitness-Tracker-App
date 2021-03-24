import React from "react";
import styles from "../styles/Widget.module.css";
import SidebarLinks from "./SidebarLinks";
function Widget() {
  return (
    <div className={styles.widget}>
      <div className={styles.widget__container}>
        <img
          className={styles.widget__image}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1622073600&v=beta&t=JFN9Arouw5n08HE-M93TSVudTycOx7_CAx3xMMImTAA"
          alt=""
        />
        <h3 className={styles.widget__name}>Stephen Plummer</h3>

        <button className={`${styles.widget__btn} ${styles.border}`}>
          {" "}
          Add A Goal{" "}
        </button>
        <div className={styles.widget__linkContainer}>
          <SidebarLinks title="Home" icon="HomeIcon" />
          <SidebarLinks title="Goals" icon="HomeIcon" />
          <SidebarLinks title="Workouts" icon="HomeIcon" />
          <SidebarLinks title="Achievements" icon="HomeIcon" />
          <SidebarLinks title="Progams" icon="HomeIcon" />
          <SidebarLinks title="Activity" icon="HomeIcon" />
          <SidebarLinks title="Settings" icon="HomeIcon" />
        </div>
        <button className={styles.widget__btn}> Logout</button>
      </div>
    </div>
  );
}

export default Widget;
