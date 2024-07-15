import React from "react";
import styles from "./Numeration.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeIndex } from "../../../features/pagination/paginationSlice";

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Numeration = () => {
  const dispatch = useDispatch();
  const lastArticleIndex = useSelector(
    (state) => state.pagination.lastArticleIndex
  );
  console.log("Last index: ", lastArticleIndex);

  const handleClick = (index) => {
    if (index * 5 < lastArticleIndex) {
      dispatch(
        changeIndex({
          firstIndex: lastArticleIndex - 10,
          lastIndex: lastArticleIndex - 5,
        })
      );
    } else {
      dispatch(
        changeIndex({
          firstIndex: index * 5 - 5,
          lastIndex: index * 5,
        })
      );
    }

    window.scrollTo(0, 300);
  };
  return (
    <div className={styles["numeration-container"]}>
      <div className={styles["numbers-container"]}>
        {numArr.map((data, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {data}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Numeration;
