import React from "react";
import HomePageBanner from "./components/HomePageBanner";
import HightlightsLayout from "./components/HighlightsLayout";
import Heros from "./components/Heros";
// import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HomePageBanner />
      <HightlightsLayout />
      <Heros />
    </>
  );
}

export default HomePage;
