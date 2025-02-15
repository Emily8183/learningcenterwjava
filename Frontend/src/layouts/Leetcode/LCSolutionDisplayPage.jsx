import React from "react";
import LeetcodePageBanner from "./components/LeetcodePageBanner";
import SolutionsList from "./components/SolutionsList";
import ComparisonSelections from "./components/LeetCodeComparator/ComparisonSelections";

function LCSolutionDisplayPage() {
  return (
    <>
      <LeetcodePageBanner />
      <SolutionsList />
      <ComparisonSelections />
    </>
  );
}

export default LCSolutionDisplayPage;
