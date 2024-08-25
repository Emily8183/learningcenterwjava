import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { CiCalendar } from "react-icons/ci";
// import { FaRegComments } from "react-icons/fa";
// import leetcodeSolutionImage from "../../../assets/img/publicImages/leetcodesolution.png";

function SolutionsList() {
  const [leetcodeSolutions, setLeetcodeSolutions] = useState([]);

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

  return (
    <>
      {/* <header className="masthead">
        <div
          className="container position-relative px-4
         px-lg-5"
        > */}
      <section className="blog-section">
        <div className="container">
          {/* <div className="section-header text">
                <h2 className="section-title">Recent blogs</h2>
                <p>
                  We put your ideas and thus your wishes in the form of a unique
                  web project that inspires you and your customers.
                </p>
              </div> */}
          <div className="grid4">
            {leetcodeSolutions.map((blog) => (
              <div className="blog-item" key={blog.id}>
                <div className="blog-thumb">
                  {/* <img src={leetcodeSolutionImage} alt="Leetcode Solution" /> */}

                  <img src={`../../../leetcode/${blog.imageURL}`} alt="" />

                  {/* <img src={`../../../leetcode/LC704.png`} alt="" /> */}
                  <a href="#" className="category">
                    {blog.dataStructure}
                  </a>
                </div>
                <div className="blog-content">
                  {/* TODO: see if I need to display dates here */}
                  {/* <div className="blog-meta">
                    <ul className="ul-reset">
                      <li>
                        <i>
                          <CiCalendar size={20} />
                        </i>
                        {blog.date}
                      </li>
                      <li>
                        <i>
                          <FaRegComments size={20} />
                        </i>
                        Comment ({blog.commentCount})
                      </li>
                    </ul>
                  </div> */}
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
      </section>
      {/* <ul>
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="post-preview">
                  {SolutionsData.map((blog) => (
                    <li key={blog.id}>
                      <h2 className="post-title">
                        <Link to={`/leetcode/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h2>
                      <h3 className="post-subtitle">
                        <Link to={`/leetcode/${blog.id}`}>
                          {blog.summary}
                        </Link>
                      </h3>
                      <span className="post-meta">
                        Posted on {blog.date}
                      </span>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </ul> */}
      {/* </div>
      </header> */}
    </>
  );
}

export default SolutionsList;
