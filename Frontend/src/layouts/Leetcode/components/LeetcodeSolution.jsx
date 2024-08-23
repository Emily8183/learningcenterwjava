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
      <div class="container mt-5">
        <article>
          <header className="mb-4">
            {/* Post title */}
            <h1 class="fw-bolder mb-1">{leetcodeSolution.title}</h1>
            <div class="text-muted fst-italic mb-2">
              Posted on {leetcodeSolution.date}
            </div>
            <a
              class="badge bg-secondary text-decoration-none link-light"
              href="#!"
            >
              {leetcodeSolution.dataStructure}
            </a>
          </header>

          <figure class="mb-4">
            <img
              class="img-fluid rounded"
              src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
              alt="..."
            />
          </figure>

          {/* Post content */}
          <section class="mb-5">
            <p class="fs-5 mb-4">{leetcodeSolution.content}</p>
            {/* TODO: can add some subtitles here */}
          </section>
        </article>
      </div>
    </>
  );
}

export default LeetcodeSolution;
