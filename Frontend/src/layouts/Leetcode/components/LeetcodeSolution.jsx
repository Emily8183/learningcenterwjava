import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function LeetcodeSolution() {
  const { id } = useParams();

  const [leetcodeSolution, setLeetcodeSolution] = useState(null);
  const [loading, setLoading] = useState(null);
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
              {leetcodeSolution.dataStructure}
            </a>
          </header>

          <figure className="mb-4">
            <img
              className="img-fluid rounded"
              src={`../../../leetcode/${leetcodeSolution.imageURL}`}
              alt=""
            />
            {/* <img
              className="img-fluid rounded"
              src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
              alt="..."
            /> */}
          </figure>

          {/* Post content */}
          <section className="mb-5">
            <p className="fs-5 mb-4" style={{ whiteSpace: "pre-line" }}>
              {leetcodeSolution.content.replace(/\\n/g, "\n")}
              {/* to change line in sql */}
            </p>
            {/* TODO: can add some subtitles here */}
          </section>
        </article>
      </div>
    </>
  );
}

export default LeetcodeSolution;
