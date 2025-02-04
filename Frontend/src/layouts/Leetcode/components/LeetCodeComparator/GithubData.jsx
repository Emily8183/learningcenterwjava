import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { useParams } from "react-router";
// import Comparison from "/Comparison.jsx";
import axios from "axios";

//const GithubData = () => {}
function GithubData() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkDown = async () => {
      try {
        const repoOwner = "Emily8183"; // 例如 "yourusername"
        const repoName = "leetcode-study-notes"; // 例如 "leetcode-notes"
        const filePath = "36_Valid_Sudoku.md"; // 例如 "two-sum.md"

        // const githubApiUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${repoName}/${filePath}`;
        const githubApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${repoName}/${filePath}`;

        const response = await axios.get(githubApiUrl);

        // GitHub API 返回的文件内容是 Base64 编码的，需要使用 atob 解码, from markdown to html
        const markdownContent = atob(response.data.content);
        setMarkdown(markdownContent);
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

  useEffect(() => {
    console.log("loading:", loading);
    console.log("error:", error);
  }, [loading, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!markdown) {
    return <h2>Posts take a while to load...</h2>;
  }

  return (
    <div>
      <h1>Github markdown</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default GithubData;
