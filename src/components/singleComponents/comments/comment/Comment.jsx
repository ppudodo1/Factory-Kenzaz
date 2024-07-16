import React, { useEffect, useState } from "react";
import styles from "./Comment.module.scss";
import avatar from "../../../../assets/logos/avatar.png";
import Reply from "../reply/Reply";
import RepliedComment from "../repliedComment/RepliedComment";
import { useSelector } from "react-redux";

const Comment = ({ userName, date, comment, id }) => {
  const comments = useSelector((state) => state.comments.arrOfComments);

  const [replied, setReplied] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [repliedComments, setRepliedComments] = useState([]);
  const [thisComment, setThisComment] = useState(null);
  const userLoggedIn = useSelector((state) => state.user.user);
  const checkForReplies = () => {
    let thisComment = comments.find((comment) => comment.id === id);
    if (
      thisComment &&
      thisComment.replyComment &&
      thisComment.replyComment.length > 0
    ) {
      setReplied(true);
      setRepliedComments(thisComment.replyComment);
    }
    setThisComment(thisComment);
  };

  useEffect(() => {
    checkForReplies();
  }, [comments]);

  const handleReplySubmit = () => {
    setShowReply(false);
    checkForReplies();
  };

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
          {userLoggedIn && Object.keys(userLoggedIn).length > 0 && (
            <button onClick={() => setShowReply(!showReply)}>Reply</button>
          )}
        </div>
        <div className={styles["comment-text-container"]}>
          <p>{comment}</p>
        </div>
        {replied &&
          repliedComments.map((e, index) => (
            <RepliedComment key={index} autor={e.name} comment={e.comment} />
          ))}
        {showReply && <Reply id={id} onReplySubmit={handleReplySubmit} />}
      </div>
    </div>
  );
};

export default Comment;
