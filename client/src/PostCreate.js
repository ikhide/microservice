import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    try {
      console.log("hello");
      event.preventDefault();
      await axios.post("http://posts.com/posts/create", { title });
      setTitle("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="from-group">
          <label htmlFor="form-control">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
