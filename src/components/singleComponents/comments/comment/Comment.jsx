import React, { useEffect, useState } from "react";
import styles from "./Comment.module.scss";
import avatar from "../../../../assets/logos/avatar.png";
import Reply from "../reply/Reply";
import RepliedComment from "../repliedComment/RepliedComment";
const Comment = ({ userName, date, comment, id }) => {
  const [replied, setReplied] = useState(false);
  const [checkReply, setCheckReply] = useState(false);
  const [repliedComments, setRepliedComments] = useState([]);
  const [thisComment, setThisComment] = useState(null);

  const checkForReplies = () => {
    let commentsArr = JSON.parse(localStorage.getItem("comments")) || [];
    let thisComment = commentsArr[id];
    if (
      thisComment &&
      thisComment.replyComments &&
      thisComment.replyComments.length > 0
    ) {
      setReplied(true);
      setRepliedComments(thisComment.replyComments);
    }
    setThisComment(thisComment);
  };

  useEffect(() => {
    checkForReplies();
  }, [checkReply]);

  return (
    <div className={styles["comment-container"]}>
      <div className={styles["avatar-image-container"]}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["info-container"]}>
          <div className={styles["text-info-container"]}>
            <h1>{userName}</h1>
            <p>{date}</p>
          </div>
          <button onClick={() => setCheckReply(!checkReply)}>Reply</button>
        </div>
        <div className={styles["comment-text-container"]}>
          <p>{comment}</p>
        </div>
        {replied &&
          repliedComments.map((e, index) => (
            <RepliedComment autor={e.name} comment={e.comment}></RepliedComment>
          ))}
        {checkReply && <Reply id={id}></Reply>}
      </div>
    </div>
  );
};

export default Comment;
