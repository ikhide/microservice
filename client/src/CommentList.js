import React from "react";

export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment, i) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    return <li key={i}> {content}</li>;
  });
  return <ul>{renderedComments}</ul>;
}
