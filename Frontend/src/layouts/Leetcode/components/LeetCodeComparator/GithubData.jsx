//new version: fetch from aws

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { useParams } from "react-router";
import axios from "axios";

//const GithubData = () => {}
function GithubData() {
  const [listDisplayed, setListDisplayed] = useState([]);
  const [selectedProblems, setSelectedProblems] = useState([]);
  //   const [content, setContent] = useState("");
  const [searchNumber, setSearchNumber] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_LEET_API_KEY;
  const apiUrl = import.meta.env.VITE_LEET_API_URL;

  //fetch all the problems' titles from DynamoDB
  useEffect(() => {
    const fetchProblemList = async () => {
      setLoading(true);

      try {
        const baseURL = apiUrl;
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

        // console.log(titles); <= make sure the problemIds are unique

        setListDisplayed(titles);
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

  //handle clicking on the selected prob
  const handleClickProblem = async (event) => {
    const selectedTitle = event.target.value; //TODO: searching by Id is better

    if (selectedProblems.length >= 4) {
      alert("Maximum is 4");
      return;
    }

    //look for the selected poblem in the list
    const matchedProblem = listDisplayed.find(
      (content) => content.title === selectedTitle
    );

    //if the title on the list but not in the table anymore
    if (!matchedProblem) {
      alert("Problem not found.");
      return;
    }

    // if duplicated
    const isDuplicate = selectedProblems.some((problem) => {
      return problem.id === matchedProblem.id;
    });

    if (isDuplicate) {
      alert("This post already exists.");
      return;
    }

    try {
      const baseURL = apiUrl;

      const res = await axios.get(
        `${baseURL}/leetResource/${matchedProblem.id}`,
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );

      const solutionData = res.data;

      //将solutionData加入matchedProblem
      const solutionDataContent = {
        ...matchedProblem,
        content: solutionData.solutionMarkdown,
      };

      console.log(solutionDataContent);

      // all good, add to the selected problem list
      setSelectedProblems((prev) => [...prev, solutionDataContent]);
    } catch (error) {
      console.error("Failed to fetch problem content:", error);
    }
  };

  const handleClearSelection = () => {
    setSelectedProblems([]);
  };

  useEffect(() => {
    console.log("loading:", loading);
    console.log("error:", error);
  }, [loading, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!selectedProblems) {
    return (
      <div className="container mt-5">
        <p>
          Sorry this site is still in the progress. You will have a better
          version soon!
        </p>
      </div>
    );
  }

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

        <div className="comparison-dropdown">
          <select onChange={handleClickProblem}>
            <option value="">Select a problem</option>

            {/* make sure the "listDisplayed" must be an array */}
            {listDisplayed.map((postContent) => (
              <option key={postContent.id} value={postContent.title}>
                {postContent.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={handleClearSelection}>Clear All Selections</button>
        </div>
      </div>

      <div className="posts-container">
        {selectedProblems.map((postContent) => (
          // 回调函数这里要用圆括号或者在大括号中显式地 return 内容
          //   <div className="post" key={postContent.problemId}>
          <div className="post" key={postContent.id}>
            <h4>
              <b>Solution: {postContent.title}</b>
            </h4>
            {/* <pre>{postContent.content}</pre> */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {typeof postContent.content === "string"
                ? postContent.content
                : JSON.stringify(postContent.content)}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubData;
