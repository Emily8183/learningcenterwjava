import React from "react";
import { SiXiaohongshu } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="#!">About</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Contact</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Terms of Use</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">
            &copy; {currentYear}. All Rights Reserved.
          </p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-4">
              <a href="http://www.linkedin.com/in/emily-zhiying-lin">
                <i className="bi bi-linkedin fs-3"></i>
              </a>
            </li>
            <li className="list-inline-item me-4">
              <a href="https://github.com/Emily8183">
                <i className="bi bi-github fs-3"></i>
              </a>
            </li>
            {/* TODO: 改一下这两个icon的链接 */}
            <li className="list-inline-item me-4">
              <a href="#!">
                <i>
                  <SiXiaohongshu />
                </i>
              </a>
            </li>
            {/* <li className="list-inline-item me-4">
              <a href="#!">
                <i className="bi bi-slack fs-3"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
