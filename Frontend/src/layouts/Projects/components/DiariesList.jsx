import React from "react";
import ProjectsPageBanner from "./ProjectsPageBanner";

function DiariesList() {
  return (
    <>
      <ProjectsPageBanner />
      <header className="masthead">
        <div
          className="container position-relative px-4
         px-lg-5"
        >
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-preview">
                <a href="#">
                  {/* TODO: remove the hyperlink  */}
                  {/* TODO: make the words bolder */}
                  <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                  </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                  </h3>
                </a>

                <span className="post-meta">Posted on August 24, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default DiariesList;
