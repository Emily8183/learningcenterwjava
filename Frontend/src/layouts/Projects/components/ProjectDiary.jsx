import React, { useState, useEffect } from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
// import DiariesData from "./DiariesData";
import { useParams } from "react-router-dom";

//如何在本页面陈列一个日记：
// 1 从URL中提取字符；
// 2 三个useState: setDiary, setLoading, setError
// 3 用useEffect来fetchDiary
// 4 if loading, log loading
// 5 if error, log error

function ProjectDiary() {
  const { id } = useParams(); //get the id from the URL
  // const projectDiary = DiariesData.find((p) => p.id === parseInt(id));
  //当直接使用const data时，可以用以上代码，从 URL 参数中提取字符串，parseInt(id) 将字符串转换为整数

  const [diary, setDiary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleDiary = async () => {
      try {
        const response = await axios.get(`/api/projectDiaries/${id}`);
        setDiary(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchSingleDiary();
  }, [id]);

  if (!projectDiary) {
    return <h2>Post not found</h2>;
  }

  return (
    <>
      <PageBanner title={projectDiary.title} content={projectDiary.summary} />
      {/* <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {/* TODO: content text size needs to change 
              <p>{projectDiary.content}</p>
            </div>
          </div>
        </div>
      </article> */}
    </>
  );
}

export default ProjectDiary;
