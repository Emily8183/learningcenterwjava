import React from "react";
import { SiXiaohongshu } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer py-5 mt-auto container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
          {/* <ul className="list-inline mb-2 link-secondary">
            <li className="list-inline-item">
              <a href="#!">About</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Contact</a>
            </li> */}
          {/* <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Terms of Use</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#!">Privacy Policy</a>
            </li> 
          </ul>*/}
          <p className="text-muted small mb-4 mb-lg-0">
            &copy; {currentYear}. All Rights Reserved.
          </p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item me-4">
              <a href="http://www.linkedin.com/in/emily-zhiying-lin">
                <i>
                  <FaLinkedin size={50} style={{ color: "gray" }} />
                </i>
              </a>
            </li>
            <li className="list-inline-item me-4">
              <a href="https://github.com/Emily8183">
                <i>
                  <IoLogoGithub size={50} style={{ color: "gray" }} />
                </i>
              </a>
            </li>
            {/* TODO: insert the hyperlink of xiaohongshu*/}
            <li className="list-inline-item me-4">
              <a href="https://www.xiaohongshu.com/user/profile/62563076000000000d03007c">
                <i>
                  <SiXiaohongshu size={80} style={{ color: "gray" }} />
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
