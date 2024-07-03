import React from "react";
import styles from "./Sidebar.module.scss";
import PostComponent from "../footer/footer-components/bottom-component/post-component/PostComponent";
const Sidebar = () => {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-title"]}>
        <a href="">Popular</a>
        <a href="">Top Rated</a>
        <a href="">Comments</a>
      </div>
      <div className={styles["sidebar-content"]}>
        <PostComponent check={"sidebar"}></PostComponent>
        <PostComponent check={"sidebar"}></PostComponent>
        <PostComponent check={"sidebar"}></PostComponent>
        <PostComponent check={"sidebar"}></PostComponent>
        <PostComponent check={"sidebar"}></PostComponent>
        <PostComponent check={"sidebar"}></PostComponent>
      </div>
    </div>
  );
};

export default Sidebar;
