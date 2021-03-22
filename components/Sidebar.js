import React from "react";
import styles from "../styles/Sidebar.module.css";
import "../components/SidebarLinks";
import SidebarLinks from "../components/SidebarLinks";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.sidebar__img}
        src="https://s3.amazonaws.com/snd-store/2519273/original.jpg"
        alt=""
      />
      <SidebarLinks title="Home" icon="HomeIcon" />
      <SidebarLinks title="Goals" icon="HomeIcon" />
      <SidebarLinks title="Workout" icon="HomeIcon" />
      <SidebarLinks title="Settings" icon="HomeIcon" />
      <SidebarLinks title="Sign Out" icon="HomeIcon" />
    </div>
  );
}

export default Sidebar;
