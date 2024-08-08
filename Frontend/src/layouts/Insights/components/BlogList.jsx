import React from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";

function BlogList() {
  return (
    <>
      <header className="masthead">
        <div
          className="container position-relative px-4
         px-lg-5"
        >
          <ul>
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="post-preview">
                  {BlogData.map((blog) => (
                    <li key={blog.id}>
                      <h2 className="post-title">
                        <Link to={`/leetcode/${blog.id}`}>{blog.title}</Link>
                      </h2>
                      <h3 className="post-subtitle">
                        <Link to={`/leetcode/${blog.id}`}>{blog.summary}</Link>
                      </h3>
                      <span className="post-meta">Posted on {blog.date}</span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}

export default BlogList;
