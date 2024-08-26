import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
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
      <section className="portfolio-section">
        <div className="container">
          {/* <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7"> */}
          <div className="portfolio-box">
            <div className="grid2">
              {diaries.map((projectDiary) => (
                <div className="portfolio-item branding" key={projectDiary.id}>
                  <div className="image-box">
                    <img src={`../../../leetcode/LC110.png`} alt="" />
                  </div>

                  <div className="content-box">
                    <h3 className="portfolio-title">
                      <Link
                        to={`/projectDiaries/${projectDiary.id}`}
                        className="project-title"
                      >
                        {projectDiary.title}
                      </Link>
                    </h3>

                    <h4>
                      <Link
                        to={`/projectDiaries/${projectDiary.id}`}
                        className="project-subtitle"
                      >
                        {projectDiary.summary}
                      </Link>
                    </h4>
                    <i>
                      <GoArrowUpRight size={50} />
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DiariesList;
