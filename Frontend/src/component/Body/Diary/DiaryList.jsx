import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "./DiaryItem";
import CreateDiary from "./CreateDiary";

function DiaryList() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/diaries");

        if (response.data && Array.isArray(response.data._embedded.diaries)) {
          const diariesWithId = response.data._embedded.diaries.map(
            (diary) => ({
              ...diary,
              diary_id: diary._links.self.href.split("/").pop(), // Extract ID from URL
            })
          );

          setDiaries(diariesWithId);
        } else {
          console.error("Unexpected response format");
        }
      } catch (error) {
        console.error("Sth wrong while fetching data", error);
      }
    };

    fetchDiaries();
  }, []);

  const handleAdd = (newDiary) => {
    setDiaries((prevDiaries) => [...prevDiaries, newDiary]);
  };
  const handleDelete = (diary_id) => {
    axios
      .delete(`http://localhost:8080/api/diaries/${diary_id}`)
      .then((response) => {
        setDiaries((prevDiaries) =>
          prevDiaries.filter((diary) => diary.diary_id !== diary_id)
        );

        console.log("Deleted diary:", response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (diary_id, updatedDiary) => {
    axios
      .patch(`http://localhost:8080/api/diaries/${diary_id}`, updatedDiary)
      .then((response) => {
        setDiaries((prevDiaries) =>
          prevDiaries.map(
            (diary) =>
              diary.diary_id === updatedDiary.diary_id ? response.data : diary //ternary operator
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
                  diary_id={diary.diary_id}
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
