import React, { useState } from "react";
import LeetcodePageBanner from "./components/LeetcodePageBanner";
import GithubData from "./components/LeetCodeComparator/GithubData";
import ComparisonData from "./components/LeetCodeComparator/ComparisonData";

function LCComparisonPage() {
  const [selectedProblems, setSelectedProblems] = useState([]);

  const handleCompare = (item) => {
    const problemNames = [
      item.problem1,
      item.problem2,
      item.problem3,
      item.problem4,
    ].filter(Boolean); //filter out the empty strings

    setSelectedProblems((prev) => [...prev, ...problemNames]);
  };

  return (
    <>
      <LeetcodePageBanner />
      <GithubData selectedProblems={selectedProblems} />
      {/* pass the selectedProblems to the GithubData component */}
      <ComparisonData category="array" onCompare={handleCompare} />
    </>
  );
}

export default LCComparisonPage;
