import React from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";

function BlogList() {
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              {BlogData.map((blog) => (
                <div key={blog.id}>
                  <h2 className="post-title">
                    <Link to={`/insights/${blog.id}`} className="post-link">
                      {blog.title}
                    </Link>
                  </h2>
                  <h3 className="post-subtitle">
                    <Link to={`/insights/${blog.id}`} className="post-link">
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
