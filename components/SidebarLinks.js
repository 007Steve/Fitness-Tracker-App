import React from "react";
import styles from "../styles/SidebarLinks.module.css";
import HomeIcon from "@material-ui/icons/Home";
function SidebarLinks({ title, icon }) {
  return (
    <div className={styles.sidebarLinks}>
      <HomeIcon />
      <h5 className={styles.sidebarLinks__title}>{title}</h5>
    </div>
  );
}

export default SidebarLinks;
