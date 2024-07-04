import React from "react";
import styles from "./CategoryCard.module.scss";
import backgroundImage from "../../assets/logos/Layer59.png";
import SingleNews from "../singleNews/SingleNews";
const CategoryCard = ({ title, borderColor, numberOfNews }) => {
  console.log("Testing branch");
  return (
    <main
      className={`${styles["news-card"]} ${styles["card-container"]}`}
      style={{
        borderLeft: `13px solid ${borderColor}`,
      }}
    >
      <div className={styles["outer-div-card"]}>
        <div className={styles["card-text"]}>
          <h1>{title}</h1>
          <a href="/single">See all</a>
        </div>
        <div className={styles["small-card-container"]}>
          {[...Array(numberOfNews)].map((_, index) => (
            <SingleNews
              key={index}
              image={backgroundImage}
              date={"August 26, 2024"}
              title={"For Obama, MLK's shadow looms large ahead of speech"}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryCard;
