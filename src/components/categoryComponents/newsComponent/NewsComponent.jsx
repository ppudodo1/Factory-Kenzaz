import React from "react";
import styles from "./NewsComponent.module.scss";
import image from "../../../assets/logos/Layer59.png";
import { Link } from "react-router-dom";
const NewsComponent = () => {
  return (
    <div className={styles["news-container"]}>
      <h1>Patriotsvv make cuts ... and Tim Tebow survives (so far)</h1>
      <div className={styles["info-container"]}>
        <p>August 26,2024</p>
        <p>Author: Matej Sudar</p>
        <p>12 comments</p>
      </div>
      <div className={styles["article-container"]}>
        <div className={styles["article-image-container"]}>
          <img src={image} alt="forest" />
        </div>
        <div className={styles["article-text-container"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.
          </p>
          <a href={"/single"}>
            <button>Read article</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
