import React, { useState, useEffect } from "react";
import axios from "axios";

function DiaryItem({
  diary_id,
  startEditing,
  stopEditing,
  onDelete,
  isEditing,
}) {
  const [initialDiary, setInitialDiary] = useState({
    title: "",
    content: "",
  });

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
  //当diary_id发生变化时，fetchDiary函数将会重新调用，以确保所获取的日记数据是最新的

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDiary({
      ...editedDiary,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedDiary = {
      title: editedDiary.title,
      content: editedDiary.content,
    };

    axios
      .patch(`http://localhost:8080/api/diaries/${diary_id}`, updatedDiary)
      .then((response) => {
        setEditedDiary(response.data);
        stopEditing();
      })
      .catch((error) => console.log(error));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditedDiary(initialDiary);
    stopEditing(); //exit edit mode
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

          <button type="submit" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <strong>{editedDiary.title}</strong>
          <p>{editedDiary.content}</p>
          <button onClick={startEditing}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default DiaryItem;
