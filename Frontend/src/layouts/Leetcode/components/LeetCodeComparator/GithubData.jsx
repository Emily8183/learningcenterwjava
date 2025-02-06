import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { useParams } from "react-router";
// import Comparison from "/Comparison.jsx";
import axios from "axios";

//const GithubData = () => {}
function GithubData() {
  const [markdown, setMarkdown] = useState("");
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [searchNumber, setSearchNumber] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkDown = async () => {
      try {
        const repoOwner = "Emily8183"; // 例如 "yourusername"
        const repoName = "leetcode-study-notes"; // 例如 "leetcode-notes"

        const filePaths = [
          "36_Valid_Sudoku.md",
          "682_Baseball_Game.md",
          "735_Asteroid_Collision.md",
          "128_Longest_Consecutive_Sequence.md",
        ];

        const markdownContents = [];

        for (const filePath of filePaths) {
          // const githubApiUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${repoName}/${filePath}`;

          // console.log(filePath);

          const githubApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${repoName}/${filePath}`;

          const response = await axios.get(githubApiUrl);

          // GitHub API 返回的文件内容是 Base64 编码的，需要使用 atob 解码, from markdown to html

          const content = atob(response.data.content);

          markdownContents.push({
            sha: response.data.sha,
            name: response.data.name.replace(/_/g, " ").replace(".md", ""),
            content,
          });
        }

        setMarkdown(markdownContents);
        setLoading(false);
        setError(null); //clear error
      } catch (error) {
        console.error("Error fetching Markdown file:", error);
        setError("Failed to load Markdown content");
        setLoading(false);
      }
    };

    fetchMarkDown(); //调用这个异步函数
  }, []);

  const handleSelectProblem = (event) => {
    const selectedProblem = event.target.value; //用户选择的选项的值

    if (selectedProblems.length >= 4) {
      alert("Maximum is 4");
      return;
    }

    if (selectedProblems.includes(selectedProblem)) {
      alert("This post already exists.");
      return;
    }

    setSelectedProblems((prev) => [...prev, selectedProblem]);

    console.log("selectedProblems:", selectedProblems);
  };

  // TODO: fix the bug of handleSearchNumber
  const handleSearchNumber = () => {
    // 遍历 markdown 文件的内容
    for (const problem of markdown) {
      if (problem.name.split("_")[0] === searchNumber) {
        // 检查 selectedProblems 中是否已经存在该题目, 用markdown.some()返回true/false
        const isAlreadySelected = markdown.some(
          (problem) => problem.name.split("_")[0] === searchNumber
        );

        if (!isAlreadySelected) {
          setSelectedProblems((prev) => [...prev, problem]);
        } else {
          alert("Problem has already been displayed");
        }
      } else {
        alert("Problem hasn't been added to my pool");
      }
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

  if (!markdown) {
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
          You can choose up to 4 problems to compare.
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by LeetCode question number"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value)}
          />
          <button onClick={handleSearchNumber}>Search</button>
        </div>

        <div className="comparison-dropdown">
          <select onChange={handleSelectProblem}>
            <option value="">Select a problem</option>
            {markdown.map((postContent) => (
              <option key={postContent.sha} value={postContent.name}>
                {postContent.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={handleClearSelection}>Clear All Selections</button>
        </div>
      </div>

      <div className="posts-container">
        {selectedProblems.map((problemName) => {
          const postContent = markdown.find(
            (content) => content.name === problemName
            //接收数组中的每个元素 content，并检查 content.name 是否等于 problemName。
          );

          return (
            <div className="post" key={postContent.sha}>
              <h4>
                <b>Solution {postContent.name}</b>
              </h4>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {typeof postContent.content === "string"
                  ? postContent.content
                  : JSON.stringify(postContent.content)}
                {/* 确保 content 是字符串 */}
              </ReactMarkdown>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GithubData;
