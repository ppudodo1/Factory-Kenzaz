import React from "react";
import styles from "./CategoryCard.module.scss";
import backgroundImage from "../../assets/logos/Layer59.png";
import SingleNews from "../singleNews/SingleNews";
const CategoryCard = ({
  title,
  borderColor,
  numberOfNews,
  articles,
  articleIndex,
}) => {
  //console.log("Articles", articles);

  return (
    <main
      className={`${styles["news-card"]} ${styles["card-container"]}`}
      style={{
        borderLeft: `13px solid ${borderColor}`,
      }}
    >
      <div className={styles["main-news-container"]}>
        <div className={styles["card-text"]}>
          <h1>{title}</h1>
          <a href="/category">See all</a>
        </div>
        <div className={styles["multiple-card-container"]}>
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <SingleNews
                key={index}
                image={article.image}
                date={new Date(article.publishedAt).toDateString()}
                title={article.title}
                articleId={articleIndex + index}
              />
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoryCard;
