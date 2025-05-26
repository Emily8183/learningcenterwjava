import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function LeetcodeSolution() {
  const { id } = useParams(); //get the id from the URL

  const [leetcodeSolution, setLeetcodeSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleSolution = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/leetcodeSolutions/${id}`
        );
        setLeetcodeSolution(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching solution");
        setLoading(false);
      }
    };

    fetchSingleSolution();
  }, [id]);

  useEffect(() => {
    console.log("loading:", loading);
    console.log("error:", error);
  }, [loading, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!leetcodeSolution) {
    return <h2>Post not found</h2>;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10">
            <article>
              <header className="mb-4">
                {/* Post title */}
                <h1 className="fw-bolder mb-1">{leetcodeSolution.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {leetcodeSolution.date}
                </div>
                <a
                  className="badge bg-secondary text-decoration-none link-light"
                  href="#!"
                >
                  {/* {leetcodeSolution.dataStructure} */}
                  Link to solution
                </a>
              </header>

              <figure className="mb-4">
                <img
                  className="img-fluid rounded"
                  src={`../../../leetcode/${leetcodeSolution.imageURL}`}
                  alt=""
                />
              </figure>

              {/* Post content */}
              <section className="mb-5">
                <p className="fs-5 mb-4" style={{ whiteSpace: "pre-line" }}>
                  {/* {leetcodeSolution.content.replace(/\\n/g, "\n")} */}
                  {leetcodeSolution.content}
                  {/* to change line in sql */}
                </p>
                {/* TODO: can add some subtitles here */}
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeetcodeSolution;
