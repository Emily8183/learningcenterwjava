import React from "react";
import LeetcodePageBanner from "./components/LeetcodePageBanner";
// import Comparison from "./components/LeetCodeComparator/Comparison";
import GithubData from "./components/LeetCodeComparator/GithubData";

function LCComparisonPage() {
  return (
    <>
      <LeetcodePageBanner />
      <GithubData />
    </>
  );
}

export default LCComparisonPage;
