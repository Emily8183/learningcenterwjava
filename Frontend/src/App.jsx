import React from "react";
import HomePage from "./layouts/HomePage/HomePage";
import Projects from "./layouts/Projects/Projects";
import LCSolutionDisplayPage from "./layouts/Leetcode/LCSolutionDisplayPage";
import LeetcodeSolution from "./layouts/Leetcode/components/LeetcodeSolution";
import Insights from "./layouts/Insights/Insights";
import Skills from "./layouts/Skills/Skills";
import Contact from "./layouts/Contact/Contact";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import Footer from "./layouts/NavbarAndFooter/Footer";
import ProjectDiary from "./layouts/Projects/components/ProjectDiary";
import InsightArticle from "./layouts/Insights/components/InsightArticle";
import LCComparisonPage from "./layouts/Leetcode/LCComparisonPage";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import "./App.css"; //用于管理与 App 组件相关的样式

function App() {
  return (
    <Router>
      {/* 即<BrowserRouter> */}
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        {/* <div className="flex-grow-1"> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="insightArticles" element={<Insights />} />
          <Route path="insightArticles/:id" element={<InsightArticle />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projectDiaries/:id" element={<ProjectDiary />} />
          <Route
            path="/leetcode/solutions"
            element={<LCSolutionDisplayPage />}
          />

          <Route path="leetcode/solutions/:id" element={<LeetcodeSolution />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leetcode/comparisons" element={<LCComparisonPage />} />
        </Routes>
        {/* </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
