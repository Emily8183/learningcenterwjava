//new version: fetch from aws

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { useParams } from "react-router";
import axios from "axios";

//const GithubData = () => {}
function GithubData() {
  const [displayed, setDisplayed] = useState([]);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [searchNumber, setSearchNumber] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_LEET_API_KEY;

  useEffect(() => {
    const fetchProblemList = async () => {
      setLoading(true);

      try {
        const baseURL =
          "https://l3b7sdjdxf.execute-api.us-east-1.amazonaws.com/prod";
        const res = await axios.get(`${baseURL}/leetResource`, {
          headers: {
            "x-api-key": apiKey,
          },
        });
        const problems = res.data;

        const titles = problems.map((problem) => ({
          id: problem.problemId,
          title: problem.title,
        }));

        setDisplayed(titles);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error(
          "There's an error while feteching the problem list:",
          error
        );
        setError("Failed to fetch the problem list");
        setLoading(false);
      }
    };

    fetchProblemList();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2>LeetCompare</h2>
        <p>
          This is a tool to address inefficiencies in LeetCode practice,
          enabling side-by-side comparison of problem similarities and
          differences. <br />
          You can choose up to <b>4 problems</b> to compare.
        </p>
      </div>

      <div className="comparison-dropdown">
        {/* <select onChange={handleSelectProblem}> */}
        <select>
          <option value="">Select a problem</option>

          {/* make sure the "displayed" must be an array */}
          {displayed.map((postContent) => (
            <option key={postContent.id} value={postContent.title}>
              {postContent.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default GithubData;
