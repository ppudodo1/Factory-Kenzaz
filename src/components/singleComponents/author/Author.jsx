import React from "react";
import styles from "./Author.module.scss";
import profilePicture from "../../../assets/logos/Layer68.png";
const Author = () => {
  return (
    <section className={styles["author-container"]}>
      <h1>About the Author</h1>
      <div className={styles["content-wrapper"]}>
        <img src={profilePicture} alt="author-image" />
        <article className={styles["author-text-container"]}>
          <p>
            Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui,
            nec hac ultrices nulla non netus. Placerat vehicula donec non
            suscipit egestas, augue vel suspendisse. Et felis venenatis blandit
            sed est ultrices, adipiscing urna, at aliquam nullam facilisis
            aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi
            purus nisl lorem.{" "}
          </p>
        </article>
      </div>
    </section>
  );
};

export default Author;
