import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import DiariesData from "./DiariesData";
import { useParams } from "react-router-dom";

function ProjectDiary() {
  const { id } = useParams();
  const diary = DiariesData.find((p) => p.id === parseInt(id));
  //从 URL 参数中提取字符串，parseInt(id) 将字符串转换为整数

  if (!diary) {
    return <h2>Post not found</h2>;
  }

  return (
    <>
      <PageBanner title={diary.title} content={diary.summary} />
      <article class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <p>{diary.content}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ProjectDiary;
