import HomePage from "./layouts/HomePage/HomePage";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import Footer from "./layouts/NavbarAndFooter/Footer";
import "./App.css"; //用于管理与 App 组件相关的样式

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
