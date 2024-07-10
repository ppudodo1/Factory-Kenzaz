import React from "react";
import styles from "./Numeration.module.scss";
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Numeration = () => {
  return (
    <div className={styles["numeration-container"]}>
      <div className={styles["numbers-container"]}>
        {numArr.map((data, index) => (
          <button key={index}>{data}</button>
        ))}
      </div>
    </div>
  );
};

export default Numeration;
