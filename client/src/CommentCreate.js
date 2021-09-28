import axios from "axios";
import React, { useState } from "react";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(`http://posts.com/posts/${postId}/comments`, {
        content,
      });

      setContent("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>

          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
