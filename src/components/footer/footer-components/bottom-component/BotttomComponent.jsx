import React from "react";
import styles from "./BottomComponent.module.scss";
import PostComponent from "./post-component/PostComponent";

const BotttomComponent = () => {
  return (
    <footer className={styles["footer-bottom-container"]}>
      <section className={styles["featured-container"]}>
        <h2>Featured</h2>
        <PostComponent check={"footer"} />
        <PostComponent check={"footer"} />
        <PostComponent check={"footer"} />
      </section>
      <section className={styles["featured-container"]}>
        <h2>Random Posts</h2>
        <PostComponent check={"footer"} />
        <PostComponent check={"footer"} />
        <PostComponent check={"footer"} />
      </section>
      <aside className={styles["twitter-container"]}>
        <h2>Twitter Feed</h2>
        <article className={styles["twitter-feed"]}>
          <p className={styles["twitter-tag"]}>Envato @envato</p>
          <p className={styles["twitter-desc"]}>
            Is this your typical million dollar day in the park?
            http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest
            pic.twitter.com/EHz7awxOXy
          </p>
        </article>
        <article className={styles["twitter-feed"]}>
          <p className={styles["twitter-tag"]}>Envato @envato</p>
          <p className={styles["twitter-desc"]}>
            Happy TrueThemes Day http://enva.to/1dRzgLD
          </p>
        </article>
        <article className={styles["twitter-feed"]}>
          <p className={styles["twitter-tag"]}>Envato @envato</p>
          <p className={styles["twitter-desc"]}>
            @robscri I would really want to look into what's taking so long.
            Thank you ever so much! ^TC
          </p>
        </article>
      </aside>
    </footer>
  );
};

export default BotttomComponent;
