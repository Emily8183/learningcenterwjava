import React from "react";

// can import the image in this file too
// import image4 from "../../../assets/img/publicImages/image4.jpg";

// TODO：页面尺寸改变后，图片不显示，且只显示两个heros

function Heros() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div
              className="col-image-left"
              //   style={{ backgroundImage: `url(${image4})` }}
            ></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>A Collection of My Projects</h1>
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
              <h1>LeetCode Solutions</h1>
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
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Professional Skills Q&A</h1>
              <p className="lead">
                - Over 10 years of experience in product and project management
                <br />
                - Self-guided on Web Development: gained 720+ followers on
                social media
                <br />
                - Identify bottlenecks and find solutions to improve performance
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
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>A Collection of My Projects</h1>
              <p className="lead">
                - Languages: JavaScript, TypeScript, Java - Front-end: Node.js,
                React, Bootstrap - Back-end: Express.js, RESTful API, Spring
                Boot, Thymeleaf - Databases: MySQL, PostgreSQL
              </p>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our Luv 2 Read students! We are diligent about our
                book selection and our books are always going to be our top
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
