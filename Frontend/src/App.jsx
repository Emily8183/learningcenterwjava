import HomePage from "./layouts/HomePage/HomePage";
import Projects from "./layouts/Projects/Projects";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import Footer from "./layouts/NavbarAndFooter/Footer";
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
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<HomePage />} />
            {/* <Route path='/articles' element={<Articles />} /> */}
            <Route path="projects" element={<Projects />} />
            {/* <Route path='/leetcode' element={<Leetcode />} /> */}
            {/* <Route path='/skills' element={<Skills />} /> */}
            {/* <Route path='/contact' element={<ContactMe />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
