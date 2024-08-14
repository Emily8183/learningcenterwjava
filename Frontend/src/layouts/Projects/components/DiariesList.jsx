import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import DiariesData from "./DiariesData";

function DiariesList() {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/projectDiaries"
        );

        if (
          response.data &&
          Array.isArray(response.data._embedded.projectDiaries)
        ) {
          const diariesWithId = response.data._embedded.projectDiaries.map(
            (projectDiary) => ({
              ...projectDiary,
              id: projectDiary._links.self.href.split("/").pop(), // Extract ID from URL
            })
          );

          setDiaries(diariesWithId);
        } else {
          console.error("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching diaries:", error);
      }
    };

    fetchDiaries();
  }, []);

  return (
    <>
      {/* <header className="masthead"> */}
      <div
        className="container position-relative px-4
         px-lg-5"
      >
        <ul>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-preview">
                {diaries.map((projectDiary) => (
                  <li key={projectDiary.id}>
                    <h2 className="post-title">
                      <Link to={`/projects/${projectDiary.id}`}>
                        {projectDiary.title}
                      </Link>
                    </h2>
                    <h3 className="post-subtitle">
                      <Link to={`/projects/${projectDiary.id}`}>
                        {projectDiary.summary}
                      </Link>
                    </h3>
                    <span className="post-meta">
                      Posted on {projectDiary.date}
                    </span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </ul>
      </div>
      {/* </header> */}
    </>
  );
}

export default DiariesList;
