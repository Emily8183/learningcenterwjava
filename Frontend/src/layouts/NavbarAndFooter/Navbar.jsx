import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Emily Lin</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Articles
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                LeetCode
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Professional Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Me
              </a>
            </li>
          </ul>
          {/* <ul className='navbar-nav ms-auto'>
          {!authState.isAuthenticated ?
            <li className='nav-item m-1'>
              <Link type='button' className='btn btn-outline-light' to='/login'>Sign in</Link>
            </li>
            :
            <li>
              <button className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
            </li>
          }
        </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
