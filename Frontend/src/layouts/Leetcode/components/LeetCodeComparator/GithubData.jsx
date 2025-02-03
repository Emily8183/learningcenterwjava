import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ReactMarkdown from "/RenderMarkdown.jsx";
import axios from "axios";

//const GithubData = () => {}
function GithubData() {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkDown = async () => {
      try {
        const repoOwner = "Emily8183"; // 例如 "yourusername"
        const repoName = "leetcode-study-notes"; // 例如 "leetcode-notes"
        const filePath = "36_Valid_Sudoku.md"; // 例如 "two-sum.md"

        const githubApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

        const response = await axios.get(githubApiUrl);

        // GitHub API 返回的文件内容是 Base64 编码的，需要使用 atob 解码, from markdown to html
        const markdownContent = atob(response.data.content);
        setMarkdown(markdownContent);
        setError(null); //clear error
      } catch (error) {
        console.error("Error fetching Markdown file:", error);
        setError("Failed to load Markdown content");
      }
    };

    fetchMarkDown(); //调用这个异步函数
  }, []);

  return (
    <div>
      <h1>Github markdown</h1>
      {/* {error ? ( // 如果有错误，显示错误信息
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ReactMarkdown>{markdown}</ReactMarkdown> // 否则渲染 Markdown 内容
      )} */}
    </div>
  );
}

export default GithubData;
