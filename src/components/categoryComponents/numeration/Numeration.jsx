import React from "react";
import styles from "./Numeration.module.scss";
const Numeration = () => {
  return (
    <div className={styles["numeration-container"]}>
      <div className={styles["numbers-container"]}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
      </div>
    </div>
  );
};

export default Numeration;
