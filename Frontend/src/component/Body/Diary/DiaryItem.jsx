import React, { useState, useEffect } from "react";
import axios from "axios";

function DiaryItem({ diary_id, onEdit, onDelete }) {
  const [initialDiary, setInitialDiary] = useState({
    title: "",
    content: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editedDiary, setEditedDiary] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/diaries/${diary_id}`
        );
        setInitialDiary(response.data);
        setEditedDiary(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchDiary();
  }, [diary_id]);

  const startEditing = (diary_id) => {
    setIsEditing(true);
    setEditingDiaryId(diary_id);
  };

  // const stopEditing = () => {
  //   setEditingDiaryId(null);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDiary({
      ...editedDiary,
      [name]: value,
    });
  };

  const handlePatch = (e) => {
    e.preventDefault();

    // onEdit(diary_id, editedDiary);
    setEditedDiary(diary_id);
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setIsEditing(!isEditing);
    setEditedDiary(initialDiary);
  };

  return (
    <div>
      {isEditing ? (
        <form>
          <input
            type="text"
            name="title"
            value={editedDiary.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="content"
            value={editedDiary.content}
            onChange={handleChange}
          />
          <button type="submit" onClick={handlePatch}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <strong>{initialDiary.title}</strong>
          <p>{initialDiary.content}</p>
          <button onClick={startEditing}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default DiaryItem;
