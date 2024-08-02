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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/home"> */}
              Home
              {/* </NavLink> */}
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/articles"> */}
              Articles
              {/* </NavLink> */}
            </li>

            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/projects"> */}
              Projects
              {/* </NavLink> */}
            </li>

            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/leetcode"> */}
              LeetCode
              {/* </NavLink> */}
            </li>

            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/softskills"> */}
              Professional Skills
              {/* </NavLink> */}
            </li>

            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/contact"> */}
              Contact Me
              {/* </NavLink> */}
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
