import React from "react";
import styles from "./Numeration.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeIndex } from "../../../features/pagination/paginationSlice";

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Numeration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (index) => {
    navigate(`/category/news/${index}`);
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
