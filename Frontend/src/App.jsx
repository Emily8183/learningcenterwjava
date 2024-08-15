import HomePage from "./layouts/HomePage/HomePage";
import Projects from "./layouts/Projects/Projects";
import Leetcode from "./layouts/Leetcode/Leetcode";
import Insights from "./layouts/Insights/Insights";
import Skills from "./layouts/Skills/Skills";
import Contact from "./layouts/Contact/Contact";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import Footer from "./layouts/NavbarAndFooter/Footer";
import ProjectDiary from "./layouts/Projects/components/ProjectDiary";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
          <Route path="/insights" element={<Insights />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDiary />} />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
