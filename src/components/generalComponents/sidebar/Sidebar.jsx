import React from "react";
import styles from "./Sidebar.module.scss";
import PostComponent from "../post-component/PostComponent";
const Sidebar = ({ articles }) => {
  return (
    <section className={styles["sidebar-container"]}>
      <nav className={styles["sidebar-title"]}>
        <a href="">Popular</a>
        <a href="">Top Rated</a>
        <a href="">Comments</a>
      </nav>
      <div className={styles["sidebar-content"]}>
        {(articles && articles.length) > 0 &&
          articles
            .slice(0, 6)
            .map((data, index) => (
              <PostComponent
                check={"sidebar"}
                title={data.title}
                imageData={data.image}
                articleId={index}
                date={data.publishedAt}
                key={index}
              ></PostComponent>
            ))}
      </div>
    </section>
  );
};

export default Sidebar;
