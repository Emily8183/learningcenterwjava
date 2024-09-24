import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [insightArticles, setInsightArticles] = useState([]);
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/insightArticles"
        );

        if (
          response.data &&
          Array.isArray(response.data._embedded.insightArticles)
        ) {
          const articlesWithId = response.data._embedded.insightArticles.map(
            (insightArticle) => ({
              ...insightArticle,
              id: insightArticle._links.self.href.split("/").pop(), // Extract ID from URL
            })
          );

          setInsightArticles(articlesWithId);
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
        setBlogposts(items);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  const BlogPost = ({ thumbnail, title, link, index }) => (
    <a href={link} target="_blank">
      <div>
        <img src={thumbnail} alt={title} loading="lazy" />
        <p>{title}</p>
      </div>
    </a>
  );

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              <div>
                <h1>12</h1>
                {/* Blog Posts Section */}

                {blogposts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
              </div>
              {insightArticles.map((blog) => (
                <div key={blog.id}>
                  <h2 className="post-title">
                    <Link
                      to={`/insightArticles/${blog.id}`}
                      className="post-link"
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  <h3 className="post-subtitle">
                    <Link
                      to={`/insightArticles/${blog.id}`}
                      className="post-link"
                    >
                      {blog.summary}
                    </Link>
                  </h3>
                  <span className="post-meta">Posted on {blog.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
