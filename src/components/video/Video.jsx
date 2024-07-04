import React from "react";
import styles from "./Video.module.scss";
const Video = () => {
  return (
    <section className={styles["video-container"]}>
      <h1>Kenaz TV</h1>
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
      <article className={styles["video-txt-container"]}>
        <p>August 26,2013</p>
        <p>Nasa releases portrait of a planet waving at Saturn</p>
      </article>
    </section>
  );
};

export default Video;
