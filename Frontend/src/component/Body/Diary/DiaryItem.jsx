import React, { useState, useEffect } from "react";
import axios from "axios";

function DiaryItem({ id, onEdit, onDelete }) {
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
        const response = await axios.get(`/api/diaries/${id}`);
        setDiary(response.data);
        setEditedDiary(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDiary();
  }, [id]);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedDiary({
      ...editedDiary,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    onEdit(diary_id, editedDiary);
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setIsEditing(!isEditing);
    setEditedDiary(initialDiary);
  };

  return (
    <div className="diary-item">
      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            name="title"
            value={editedDiary.title}
            onChange={handleEdit}
          />
          <textarea
            name="content"
            value={editedDiary.content}
            onChange={handleEdit}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <strong>{editedDiary.title}</strong>
          <p>{editedDiary.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default DiaryItem;
