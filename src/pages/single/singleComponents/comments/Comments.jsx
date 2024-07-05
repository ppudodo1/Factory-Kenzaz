import React from "react";
import styles from "./Comments.module.scss";
import Comment from "./comment/Comment";
import AddComment from "./addComment/AddComment";
let commentsArr = JSON.parse(localStorage.getItem("comments")) || [];

const Comments = () => {
  return (
    <div className={styles["comments-outer-container"]}>
      <h1>Comments</h1>
      <div className={styles["comments-inner-container"]}>
        <Comment
          userName={"Matt Adams"}
          date={"Jan 2nd, 2012 2:35 pm"}
          comment={
            "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna."
          }
        ></Comment>
        <Comment
          userName={"John Toews"}
          date={"Jan 2nd, 2012 2:35 pm"}
          comment={
            "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna."
          }
        ></Comment>
        <Comment
          userName={"Andrew Enns"}
          date={"Jan 2nd, 2012 2:35 pm"}
          comment={
            "Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna."
          }
        ></Comment>

        {commentsArr.map((comment, index) => (
          <Comment
            userName={comment.user}
            date={comment.date}
            comment={comment.userComment}
            key={index}
          ></Comment>
        ))}
        <AddComment></AddComment>
      </div>
    </div>
  );
};

export default Comments;
