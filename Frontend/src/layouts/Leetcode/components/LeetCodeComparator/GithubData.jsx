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

      {markdown.map((postContent) => (
        <div key={postContent.sha}>
          <h2>Post {postContent.name}</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {typeof postContent.content === "string"
              ? postContent.content
              : JSON.stringify(postContent.content)}
            {/* 确保 content 是字符串 */}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export default GithubData;
