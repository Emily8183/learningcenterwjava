import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SolutionsList() {
  const [leetcodeSolutions, setLeetcodeSolutions] = useState([]);
  const [leetcodePosts, setLeetcodePosts] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/leetcodeSolutions"
        );

        if (
          response.data &&
          Array.isArray(response.data._embedded.leetcodeSolutions)
        ) {
          const solutionsWithId = response.data._embedded.leetcodeSolutions.map(
            (leetcodesolution) => ({
              ...leetcodesolution,
              id: leetcodesolution._links.self.href.split("/").pop(), // Extract ID from URL
            })
          );

          setLeetcodeSolutions(solutionsWithId);
        } else {
          console.error("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching diaries:", error);
      }
    };

    fetchSolutions();
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=http://medium.com/feed/@emily.zy.lin"
        );
        const data = await response.json();
        const items = data.items || [];
        // 提取 description 中的 img src
        const updatedItems = items.map((post) => {
          const coverImageMatch = post.description.match(
            /<img[^>]+src="([^">]+)"/
          );
          const coverImage = coverImageMatch ? coverImageMatch[1] : null;
          return { ...post, coverImage };
        });

        setLeetcodePosts(updatedItems);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  // const LeetcodePost = ({ thumbnail, title, link, index }) => (
  //   <a href={link} target="_blank">
  //     <div>
  //       <img src={post["thumbnail"]} alt={title} loading="loading" />
  //       <p>{title}</p>
  //     </div>
  //   </a>
  // );

  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="grid4">
            {/* Blog Posts Section */}
            <div>
              {/* {leetcodePosts.map((post, index) => (
                <LeetcodePost key={index} {...post} />
              ))} */}
              {leetcodePosts.map((post, index) => (
                <div className="blog-item" key={index}>
                  <div className="blog-thumb">
                    <img src={post.coverImage} alt="" />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div>
              {leetcodeSolutions.map((blog) => (
                <div className="blog-item" key={blog.id}>
                  <div className="blog-thumb">
                    <img src={`../../../leetcode/${blog.imageURL}`} alt="" />

                    {/* <img src={`../../../leetcode/LC704.png`} alt="" /> */}
                    <a href="#" className="category">
                      {blog.dataStructure}
                    </a>
                  </div>
                  <div className="blog-content">
                    {/* TODO: see if I need to display dates here */}
                    <h3 className="blog-title">
                      <Link
                        to={`/leetcodeSolutions/${blog.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {blog.title}
                      </Link>
                    </h3>
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

export default SolutionsList;
