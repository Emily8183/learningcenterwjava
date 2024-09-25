import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function decodeHtmlEntities(str) {
  return str.replace(/&amp;/g, "&");
}

function BlogList() {
  const [insightArticles, setInsightArticles] = useState([]); //SQL
  const [insightPosts, setInsightPosts] = useState([]); //Medium

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

            //only display date
            const formattedDateMatch =
              post.pubDate.match(/(\d{4}-\d{2}-\d{2})/);
            const formattedDate = formattedDateMatch
              ? formattedDateMatch[1]
              : "";

            return {
              ...post,
              coverImage,
              title: decodedTitle,
              pubDate: formattedDate,
            };
          })
          .filter((post) => {
            const hasInsights = /insights/i.test(post.categories);
            const isEnglishTitle = /english/i.test(post.categories);
            return hasInsights && isEnglishTitle;
          });

        setInsightPosts(updatedItems);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // setBlogLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* Blog Posts from my SQL*/}
            <div className="post-preview">
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

            <div>
              {/* Blog Posts from Medium*/}
              <div className="post-preview">
                {insightPosts.map((post, index) => (
                  <div key={index}>
                    <h2 className="post-title">
                      <Link to={post.link} className="post-link">
                        {post.title}
                      </Link>
                    </h2>
                    {/* <h3 className="post-subtitle">
                      <Link
                        to={`/insightArticles/${blog.id}`}
                        className="post-link"
                      >
                        {blog.summary}
                      </Link>
                    </h3> */}
                    <span className="post-meta">Posted on {post.pubDate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
