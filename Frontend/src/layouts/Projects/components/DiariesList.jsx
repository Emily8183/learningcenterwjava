import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
// import DiariesData from "./DiariesData";

function decodeHtmlEntities(str) {
  return str.replace(/&amp;/g, "&");
}

function DiariesList() {
  const [diaries, setDiaries] = useState([]); //SQL
  const [projectPosts, setProjectPosts] = useState([]); //Medium

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

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emily.zy.lin"
        );
        const data = await response.json();
        const items = data.items || [];

        const updatedItems = items
          // 提取 description 中的 img src
          .map((post) => {
            const coverImageMatch = post.description.match(
              /<img[^>]+src="([^">]+)"/
            );
            const coverImage = coverImageMatch ? coverImageMatch[1] : null;

            //decode &amp in title
            const decodedTitle = decodeHtmlEntities(post.title);

            return { ...post, coverImage, title: decodedTitle };
          })
          .filter((post) => {
            const hasProjects = /projects/i.test(post.categories);
            const isEnglishTitle = /english/i.test(post.categories);
            return hasProjects && isEnglishTitle;
          });

        setProjectPosts(updatedItems);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // setBlogLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-box">
            {/* Blog Posts from my SQL*/}
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

            <div>
              {/* Blog Posts from Medium*/}
              <div className="grid2">
                {projectPosts.map((post, index) => (
                  <div className="portfolio-item branding" key={index}>
                    <div className="image-box">
                      <img src={post.coverImage} alt="" />
                    </div>

                    <div className="content-box">
                      <h3 className="portfolio-title">
                        <Link
                          to={post.link}
                          style={{ textDecoration: "none" }}
                          className="project-title"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      {/* <h4>
                      <Link
                        to={`/projectDiaries/${projectDiary.id}`}
                        className="project-subtitle"
                      >
                        {projectDiary.summary}
                      </Link>
                    </h4> */}
                      <i>
                        <GoArrowUpRight size={50} />
                      </i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DiariesList;
