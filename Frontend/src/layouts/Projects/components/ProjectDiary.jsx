import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import DiariesData from "./DiariesData";
import { useParams } from "react-router-dom";

function ProjectDiary() {
  const { id } = useParams();
  const projectDiary = DiariesData.find((p) => p.id === parseInt(id));
  //从 URL 参数中提取字符串，parseInt(id) 将字符串转换为整数

  if (!projectDiary) {
    return <h2>Post not found</h2>;
  }

  return (
    <>
      <PageBanner title={projectDiary.title} content={projectDiary.summary} />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {/* TODO: content text size needs to change */}
              <p>{projectDiary.content}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ProjectDiary;
