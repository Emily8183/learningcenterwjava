import React, { useState } from "react";
import axios from "axios";

function CreateDiary({ onAddDiary }) {
  const [newDiary, setNewDiary] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewDiary({
      ...newDiary,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/diaries", newDiary)
      .then((res) => {
        onAddDiary(res.data);
        setNewDiary({
          title: "",
          content: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-diary">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newDiary.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="What I have learned today..."
          value={newDiary.content}
          onChange={handleChange}
          rows="10"
        />
        <button type="submit">Create Diary</button>
      </form>
    </div>
  );
}
