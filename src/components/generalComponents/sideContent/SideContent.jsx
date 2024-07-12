import React from "react";
import styles from "./SideContent.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Social from "../social/Social";
import Video from "../video/Video";
import Banner from "../banner/Banner";
import Facebook from "../facebook/Facebook";
const SideContent = ({ articles }) => {
  return (
    <div className={styles["side-content-container"]}>
      <Sidebar articles={articles}></Sidebar>
      <Social></Social>
      <Video></Video>
      <div className={styles["banner-container"]}>
        <Banner width={128} height={128} top={0}></Banner>
        <Banner width={128} height={128} top={0}></Banner>
      </div>
      <Facebook></Facebook>
    </div>
  );
};

export default SideContent;
