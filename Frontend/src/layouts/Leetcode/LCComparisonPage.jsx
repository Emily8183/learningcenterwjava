import React from "react";
import LeetcodePageBanner from "./components/LeetcodePageBanner";
import GithubData from "./components/LeetCodeComparator/GithubData";
import ComparisonData from "./components/LeetCodeComparator/ComparisonData";

function LCComparisonPage() {
  return (
    <>
      <LeetcodePageBanner />
      <GithubData />
      <ComparisonData category="Arrays" />
    </>
  );
}

export default LCComparisonPage;
