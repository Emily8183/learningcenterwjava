import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function InsightArticle() {
  const { id } = useParams();
  const [insightArticle, setInsightArticle] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/insightArticles/${id}`
        );
        setInsightArticle(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching solution");
        setLoading(false);
      }
    };

    fetchSingleArticle();
  }, [id]);

  useEffect(() => {
    console.log("loading:", loading);
    console.log("error:", error);
  }, [loading, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!insightArticle) {
    return <h2>Post not found</h2>;
  }

  return (
    <>
      <div className="container mt-5">
        <div class="row">
          <div class="col-lg-10">
            <article>
              <header className="mb-4">
                {/* Post title */}
                <h1 className="fw-bolder mb-1">{insightArticle.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {insightArticle.date}
                </div>
              </header>

              <figure className="mb-4">
                <img
                  className="img-fluid rounded"
                  src={`../../../insights/${insightArticle.imageURL}`}
                  alt="..."
                />
              </figure>

              {/* Post content */}
              <section className="mb-5">
                <p className="fs-5 mb-4" style={{ whiteSpace: "pre-line" }}>
                  {insightArticle.content.replace(/\\n/g, "\n")}
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

export default InsightArticle;
