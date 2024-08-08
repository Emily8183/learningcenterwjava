import React from "react";
import LeetcodePageBanner from "./components/LeetcodePageBanner";
import SolutionsList from "./components/SolutionsList";

function Leetcode() {
  return (
    <>
      {/* <SolutionsList /> */}
      <LeetcodePageBanner />
      <SolutionsList />
    </>
  );
}

export default Leetcode;
