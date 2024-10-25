import React from "react";
import { Link } from "react-router-dom";

// can import the image in this file too
// import image4 from "../../../assets/img/publicImages/image4.jpg";

function Heros() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="homepage-col-image left-one"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <Link
                to="/projects"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>Project Experience</h1>
              </Link>
              <ul className="lead">
                <li>Languages: JavaScript, TypeScript, Java</li>
                <li>Front-end: Node.js, React, Bootstrap</li>
                <li>
                  Back-end: Express.js, RESTful API, Spring Boot, Thymeleaf
                </li>
                <li>Databases: MySQL, PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <Link
                to="/leetcodeSolutions"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>LeetCode Solutions</h1>
              </Link>
              <ul className="lead">
                <li>Data Structures and Algorithms</li>
                <li>Step by Step Solutions</li>
                <li>Tips and Tricks</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="homepage-col-image right-one"></div>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-sm-6 col-md-6">
            <div className="homepage-col-image left-two"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <Link
                to="/skills"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {/* TODO: change to "Professional Skills & Q&A" */}
                <h1>Professional Skills</h1>
              </Link>
              <ul className="lead">
                <li>Self-driven and passionate web developer</li>
                <li>
                  Years of experience in product development & project
                  management
                </li>
                <li>Successfully launched and grew a startup business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="homepage-col-image left-one img-fluid"></div>
            <div className="mt-2">
              <Link
                to="/projects"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>Project Display</h1>
              </Link>

              <ul className="lead">
                <li>Languages: JavaScript, TypeScript, Java</li>
                <li>Front-end: Node.js, React, Bootstrap</li>
                <li>
                  Back-end: Express.js, RESTful API, Spring Boot, Thymeleaf
                </li>
                <li>Databases: MySQL, PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className="m-2">
            <div className="homepage-col-image right-one img-fluid"></div>
            <div className="mt-2">
              <Link
                to="/leetcodeSolutions"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>LeetCode Solutions</h1>
              </Link>
              <ul className="lead">
                <li>Data Structures and Algorithms</li>
                <li>Step by Step Solutions</li>
                <li>Tips and Tricks</li>
              </ul>
            </div>
          </div>
          <div className="m-2">
            <div className="homepage-col-image left-two img-fluid"></div>
            <div className="mt-2">
              <Link
                to="/skills"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {/* TODO: change to "Professional Skills & Q&A" */}
                <h1>Professional Skills</h1>
              </Link>
              <ul className="lead">
                <li>Self-driven and passionate web developer</li>
                <li>
                  Years of experience in product development & project
                  management
                </li>
                <li>Successfully launched and grew a startup business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
