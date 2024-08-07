import React from "react";
import ProjectsPageBanner from "./ProjectsPageBanner";
import { Link } from "react-router-dom";
import DiariesData from "./DiariesData";

function DiariesList({ diariesData }) {
  return (
    <>
      <ProjectsPageBanner />

      <header className="masthead">
        <div
          className="container position-relative px-4
         px-lg-5"
        >
          <ul>
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="post-preview">
                  {DiariesData.map((diary) => (
                    <li key={diary.id}>
                      <h2 className="post-title">
                        <Link to={`/projects/${diary.id}`}>{diary.title}</Link>
                      </h2>
                      <h3 className="post-subtitle">
                        <Link to={`/projects/${diary.id}`}>
                          {diary.summary}
                        </Link>
                      </h3>
                      <span className="post-meta">Posted on {diary.date}</span>
                    </li>
                  ))}
                  {/* <a href="#">
                  {/* TODO: remove the hyperlink  */}
                  {/* TODO: make the words bolder */}
                  {/* <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </a> */}

                  {/* <span className="post-meta">Posted on August 24, 2023</span> */}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}

export default DiariesList;
