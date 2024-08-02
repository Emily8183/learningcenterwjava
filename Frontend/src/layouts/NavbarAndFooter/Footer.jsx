import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
          <ul class="list-inline mb-2">
            <li class="list-inline-item">
              <a href="#!">About</a>
            </li>
            <li class="list-inline-item">⋅</li>
            <li class="list-inline-item">
              <a href="#!">Contact</a>
            </li>
            <li class="list-inline-item">⋅</li>
            <li class="list-inline-item">
              <a href="#!">Terms of Use</a>
            </li>
            <li class="list-inline-item">⋅</li>
            <li class="list-inline-item">
              <a href="#!">Privacy Policy</a>
            </li>
          </ul>
          <p class="text-muted small mb-4 mb-lg-0">
            &copy; {currentYear}. All Rights Reserved.
          </p>
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-4">
              <a href="http://www.linkedin.com/in/emily-zhiying-lin">
                <i class="bi bi-linkedin fs-3"></i>
              </a>
            </li>
            <li class="list-inline-item me-4">
              <a href="https://github.com/Emily8183">
                <i class="bi bi-github fs-3"></i>
              </a>
            </li>
            {/* TODO: 改一下这两个icon的链接 */}
            <li class="list-inline-item me-4">
              <a href="#!">
                <i class="bi bi-discord fs-3"></i>
              </a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#!">
                <i class="bi bi-slack fs-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
