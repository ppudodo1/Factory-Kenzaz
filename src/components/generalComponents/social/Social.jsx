import React from "react";
import styles from "./Social.module.scss";
import facebook from "../../../assets/logos/Facebook1.png";
import twitter from "../../../assets/logos/twitter1.png";
import youtube from "../../../assets/logos/Youtube1.png";
const Social = () => {
  return (
    <article className={styles["social-container"]}>
      <h1 className={styles["social-title"]}>Social</h1>
      <div className={styles["media-container"]}>
        <img src={facebook} alt="facebook" />
        <button>Like</button>
        <button>25041 Fans</button>
      </div>
      <div className={styles["media-container"]}>
        <img src={twitter} alt="twitter" />
        <button>Like</button>
        <button>25041 Fans</button>
      </div>
      <div className={styles["media-container"]}>
        <img src={youtube} alt="youtube" />
        <button>Like</button>
        <button>25041 Fans</button>
      </div>
    </article>
  );
};

export default Social;
