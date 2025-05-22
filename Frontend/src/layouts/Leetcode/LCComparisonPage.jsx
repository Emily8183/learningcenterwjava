import React, { useState, useEffect } from "react";
import LeetcodePageBanner from "./components/LeetcodePageBanner";
import GithubData from "./components/LeetCodeComparator/GithubData";
import ComparisonData from "./components/LeetCodeComparator/ComparisonData";
// import DisplayGithubSolutions from "./components/LeetCodeComparator/DisplayGithubSolutions";
function LCComparisonPage() {
  const [selectedProblems, setSelectedProblems] = useState([]);
  const handleCompare = (item) => {
    const problemNames = [
      item.problem1,
      item.problem2,
      item.problem3,
      item.problem4,
    ].filter(Boolean); //filter out the empty strings

    setSelectedProblems(problemNames); //update the selectedProblems, clear the old ones
  };

  useEffect(() => {
    console.log("selectedProblems", selectedProblems);
  }, [selectedProblems]); //依赖 selectedProblems，确保更新后才执行

  return (
    <>
      <LeetcodePageBanner />

      {/* pass the selectedProblems to the GithubData component */}
      <ComparisonData category="array" onCompare={handleCompare} />
      <GithubData selectedProblems={selectedProblems} />
      {/* <DisplayGithubSolutions selectedProblems={selectedProblems} /> */}
    </>
  );
}

export default LCComparisonPage;
