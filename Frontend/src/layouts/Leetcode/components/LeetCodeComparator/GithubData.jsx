import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { useParams } from "react-router";
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
      setLoading(true);
      try {
        const repoOwner = "Emily8183";
        const repoName = "leetcode-study-notes";

        const githubAllApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/main?recursive=1`;
        const response = await axios.get(githubAllApiUrl);

        //fetch all the file names
        const filePaths = [];
        const apiTreeLinks = response.data.tree;

        for (const file of apiTreeLinks) {
          if (file.path.endsWith(".md") && file.path !== "README.md") {
            filePaths.push(file.path.replace("leetcode-study-notes/", ""));
          }
        }

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
        setError(
          "Due to the limit rates of GitHub API, the performance might not be stable. Please come back soon!"
        );
        setLoading(false);
      }
    };

    fetchMarkDown(); //调用这个异步函数
  }, []);

  const handleSelectProblem = (event) => {
    const selectedName = event.target.value;

    if (selectedProblems.length >= 4) {
      alert("Maximum is 4");
      return;
    }

    if (
      selectedProblems.some((problem) => problem.name == selectedName) ||
      selectedProblems.some(
        (problem) => problem.name.split(" ")[0] == selectedName.split(" ")[0]
      )
    ) {
      alert("This post already exists.");
      return;
    }

    const matchedProblem = markdown.find(
      (content) => content.name === selectedName //single expression and no curly braces, short for return
    );

    if (matchedProblem) {
      setSelectedProblems((prev) => [...prev, matchedProblem]);
    }

    console.log(matchedProblem);
  };
  const handleSearchNumber = () => {
    if (selectedProblems.length >= 4) {
      alert("Maximum is 4");
      return;
    }
    //foundProblem is an object here
    const foundProblem = markdown.find((content) => {
      const problemNumber = content.name.split(" ")[0]; //Multi-line arrow function with curly braces
      return problemNumber === searchNumber; //return true or false
    });

    if (foundProblem) {
      if (
        !selectedProblems.some(
          (problem) => problem.name.split(" ")[0] === searchNumber
        )
      ) {
        setSelectedProblems((prev) => [...prev, foundProblem]);
      } else {
        alert("Solution has been displayed");
      }
    } else {
      if (confirm("Oops.. Email me to add this problem for you!")) {
        window.open("https://emily.brajk.me/contact", "_blank");
      }
    }
  };

  // EXPLAINATION: The following origin code will print "can't find problem" multiple times due to the loop

  // for (const problem of markdown) {
  //   const num = problem.name.split(" ")[0];

  //   // console.log("the num retreived from json is:" + num);
  //   // console.log("the num that user input is :" + searchNumber);

  //   if (num == searchNumber && !selectedProblems.includes(problem)) {
  //     setSelectedProblems((prev) => [...prev, problem]);
  //   }
  //   // else {
  // }
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
          You can choose up to <b>4 problems</b> to compare.
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by LeetCode question number"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value.trim())}
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

      {/* <div className="posts-container">
        {selectedProblems.map((postContent) => (
          // 回调函数这里要用圆括号或者在大括号中显式地 return 内容
          <div className="post" key={postContent.sha}>
            <h4>
              <b>Solution {postContent.name}</b>
            </h4>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {typeof postContent.content === "string"
                ? postContent.content
                : JSON.stringify(postContent.content)}
              //确保 content 是字符串 
            </ReactMarkdown>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default GithubData;
