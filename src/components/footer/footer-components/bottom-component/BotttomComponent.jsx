import React from "react";
import styles from "./BottomComponent.module.scss";
import PostComponent from "./post-component/PostComponent";
const BotttomComponent = () => {
  return (
    <div className={styles["footer-bottom-outer-container"]}>
      <div className={styles["featured-container"]}>
        <h2>Featured</h2>
        <PostComponent check={"footer"}></PostComponent>
        <PostComponent check={"footer"}></PostComponent>
        <PostComponent check={"footer"}></PostComponent>
      </div>
      <div className={styles["featured-container"]}>
        <h2>Random Posts</h2>
        <PostComponent check={"footer"}></PostComponent>
        <PostComponent check={"footer"}></PostComponent>
        <PostComponent check={"footer"}></PostComponent>
      </div>
      <div className={styles["twitter-container"]}>
        <h2>Twitter Feed</h2>
        <div className={styles["twitter-feed"]}>
          <p className={styles["twitter-tag"]}>Envato @envato</p>
          <p className={styles["twitter-desc"]}>
            Is this your typical million dollar day in the park?
            http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest
            pic.twitter.com/EHz7awxOXy
          </p>
        </div>
        <div className={styles["twitter-feed"]}>
          <p className={styles["twitter-tag"]}>Envato @envato</p>
          <p className={styles["twitter-desc"]}>
            Happy TrueThemes Day http://enva.to/1dRzgLD
          </p>
        </div>
        <div className={styles["twitter-feed"]}>
          <p className={styles["twitter-tag"]}>Envato @envato</p>
          <p className={styles["twitter-desc"]}>
            @robscri I would really want to look into what's taking so long.
            Thank you ever so much! ^TC
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotttomComponent;
