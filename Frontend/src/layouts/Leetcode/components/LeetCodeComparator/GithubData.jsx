import React, { useEffect, useState } from "react";

//const GithubData = () => {}
function GithubData() {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const repoOwner = "Emily8183"; // 例如 "yourusername"
    const repoName = "leetcode-study-notes"; // 例如 "leetcode-notes"
    const filePath = "36_Valid_Sudoku.md"; // 例如 "two-sum.md"

    const githubApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

    fetch(githubApiUrl);
  });
}

export default GithubData;
