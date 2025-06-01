//new version: fetch from aws

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { useParams } from "react-router";
import axios from "axios";

//const GithubData = () => {}
function GithubData() {
  const [displayed, setDisplayed] = useState([]); //TODO: change the function name; display the problem list
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

  //handle clicking on the selected prob
  const handleClickProblem = async (event) => {
    const selectedTitle = event.target.value; //TODO: searching by Id is better

    if (selectedProblems.length >= 4) {
      alert("Maximum is 4");
      return;
    }

    const matchedProblem = displayed.find(
      (content) => content.title === selectedTitle
    );

    // console.log("matchedProblem:", matchedProblem); <= Test result: works well

    //if the title on the list but not in the table anymore
    if (!matchedProblem) {
      alert("Problem not found.");
      return;
    }

    // if duplicated
    const isDuplicate = selectedProblems.some((problem) => {
      console.log(problem);
      return problem.id === matchedProblem.id;
    });

    if (isDuplicate) {
      alert("This post already exists.");
      return;
    }

    console.log(matchedProblem);
    console.log(selectedProblems);

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

      const solution = res.data;

      //将solution加入matchedProblem
      const solutionContent = {
        ...matchedProblem,
        content: solution.solutionMarkdown,
      };

      console.log(solutionContent);

      // all good, add to the selected problem list
      setSelectedProblems((prev) => [...prev, solutionContent]);
    } catch (error) {
      console.error("Failed to fetch problem content:", error);
    }
  };

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
        <select onChange={handleClickProblem}>
          <option value="">Select a problem</option>

          {/* make sure the "displayed" must be an array */}
          {displayed.map((postContent) => (
            // <option key={postContent.problemId} value={postContent.title}>
            <option key={postContent.id} value={postContent.title}>
              {postContent.title}
            </option>
          ))}
        </select>
      </div>

      <div className="posts-container">
        {selectedProblems.map((postContent) => (
          // 回调函数这里要用圆括号或者在大括号中显式地 return 内容
          //   <div className="post" key={postContent.problemId}>
          <div className="post" key={postContent.id}>
            <h4>
              <b>Solution: {postContent.title}</b>
            </h4>
            <pre>{postContent.content}</pre>
            {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {typeof postContent.content === "string"
                ? postContent.content
                : JSON.stringify(postContent.content)}
            </ReactMarkdown> 
            */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubData;
