import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "./DiaryItem";
import CreateDiary from "./CreateDiary";

function DiaryList() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    axios
      .get("/api/diaries")
      .then((res) => setDiaries(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (newDiary) => {
    setDiaries([...diaries, newDiary]);
  };
  const handleDelete = (id) => {
    setDiaries(diaries.filter((diary) => diary.id !== id));
  };

  const handleEdit = (diary_id, updatedDiary) => {
    setDiaries(
      diaries.map((diary) => (diary.id === id ? updatedDiary : diary))
    );
  };

  return (
    <div className="diary-list">
      <CreateDiary onAddDiary={handleAdd} />

      <div>
        <h1>Check out the latest diaries</h1>
        <ul>
          {diaries.map((diary) => (
            <li key={diary.diary_id}>
              <DiaryItem
                id={diary.id}
                onDelete={() => handleDelete(diary.diary_id)}
                onEdit={(updatedDiary) =>
                  handleEdit(diary.diary_id, updatedDiary)
                }
              />
            </li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}
