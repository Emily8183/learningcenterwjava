import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "./DiaryItem";
import CreateDiary from "./CreateDiary";

function DiaryList() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    console.log("1");
    const fetchDiaries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/diaries");

        console.log(response.data.diaries);
        setDiaries(response.data.diaries);
      } catch (error) {
        console.error("Sth wrong while fetching data", error);
      }
    };

    fetchDiaries();
  }, []);

  const handleAdd = (newDiary) => {
    setDiaries([...diaries, newDiary]);
  };
  const handleDelete = (diary_id) => {
    setDiaries(diaries.filter((diary) => diary.diary_id !== diary_id));
  };

  const handleEdit = (diary_id, updatedDiary) => {
    console.log("updated diary", updatedDiary);

    axios
      .patch(`/api/diaries/${diary_id}`, updatedDiary)
      .then((response) => {
        setDiaries((prevDiaries) =>
          prevDiaries.map((diary) =>
            diary.diary_id === updatedDiary.diary_id ? response.data : diary
          )
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="diary-list">
      <CreateDiary onAddDiary={handleAdd} />

      <div>
        <h1>Check out the latest diaries</h1>
        <ul>
          {diaries &&
            diaries.map((diary) => (
              <li key={diary.diary_id}>
                <DiaryItem
                  id={diary.diary_id}
                  onDelete={() => handleDelete(diary.diary_id)}
                  onEdit={(updatedDiary) =>
                    handleEdit(diary.diary_id, updatedDiary)
                  }
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default DiaryList;
