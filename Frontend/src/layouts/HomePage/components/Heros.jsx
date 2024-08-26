import React from "react";
import { Link } from "react-router-dom";

// can import the image in this file too
// import image4 from "../../../assets/img/publicImages/image4.jpg";

// TODO：页面尺尺寸变小后,显示出问题

function Heros() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left-one"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <Link
                to="/projects"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>Project Display</h1>
              </Link>
              <p className="lead">
                - Languages: JavaScript, TypeScript, Java
                <br />
                - Front-end: Node.js, React, Bootstrap
                <br />
                - Back-end: Express.js, RESTful API, Spring Boot, Thymeleaf
                <br />- Databases: MySQL, PostgreSQL
              </p>
            </div>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <Link
                to="/leetcode"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>LeetCode Solutions</h1>
              </Link>
              <p className="lead">
                - Data Structures and Algorithms
                <br />
                - Step by Step Solutions
                <br />
                - Tips and Tricks
                <br />
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>

        <div className="row g-0">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left-two"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <Link
                to="/skills"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>Professional Skills Q&A</h1>
              </Link>
              <p className="lead">
                - Ten years of experience in product development and project
                management
                <br />
                - Self-guided on Web Development: gained 800+ followers since
                Feb 2024
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: update the Mobile views */}
      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left-one"></div>
            <div className="mt-2">
              <Link
                to="/projects"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>Project Display</h1>
              </Link>
              <p className="lead">
                - Languages: JavaScript, TypeScript, Java
                <br />
                - Front-end: Node.js, React, Bootstrap
                <br />
                - Back-end: Express.js, RESTful API, Spring Boot, Thymeleaf
                <br />- Databases: MySQL, PostgreSQL
              </p>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <Link
                to="/leetcode"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>LeetCode Solutions</h1>
              </Link>
              <p className="lead">
                - Data Structures and Algorithms
                <br />
                - Step by Step Solutions
                <br />
                - Tips and Tricks
                <br />
              </p>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-left-two"></div>
            <div className="mt-2">
              <Link
                to="/skills"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <h1>Professional Skills Q&A</h1>
              </Link>
              <p className="lead">
                - Ten years of experience in product development and project
                management
                <br />
                - Self-guided on Web Development: gained 800+ followers since
                Feb 2024
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
