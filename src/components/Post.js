import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../firebase";
import firebase from "firebase";

function Post({ postId, user, username, imageUrl, caption }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} />
      <h4 className="post__text">
        <strong>{username}:</strong> {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment) => (
          <span>
            <Avatar
              className="comment__avatar"
              alt={comment.username}
              src="/static/images/avatar/1.jpg"
            />
            <span className="comment__content">
              <span className="comment__mainContent">

              <p>
                <strong> {comment.username}</strong> {comment.text}
              </p>
              </span>
              <span className="comment__date">posted on notSureWhen</span>
            </span>
          </span>
        ))}
      </div>

      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Comment something here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disable={!comment}
            className="post__button"
            type="submit"
            value={comment}
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
