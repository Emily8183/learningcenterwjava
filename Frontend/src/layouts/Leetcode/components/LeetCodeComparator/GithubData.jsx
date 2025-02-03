import React, { useEffect, useState } from "react";

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

        // 解码 Base64 内容, from markdown to html
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
}

export default GithubData;
