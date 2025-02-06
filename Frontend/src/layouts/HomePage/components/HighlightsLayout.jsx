import React from "react";
import HighlightsData from "./HighlightsData";
import { Link } from "react-router";
import { FaBullhorn } from "react-icons/fa";

function HighlightsLayout() {
  return (
    <>
      <Link
        to="https://emily.brajk.me/leetcode/comparisons"
        div
        className="announcement-link"
      >
        <div className="announcement">
          <FaBullhorn className="announcement-icon" />
          <p>
            <strong>
              LeetCompare Trial Version is Now Live! Click to access. Compare up
              to 4 similar problems side-by-side for efficient study. For any
              feedback or suggestions, feel free to reach out!
            </strong>
          </p>
        </div>
      </Link>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {HighlightsData.map((prop) => (
              <div className="col-lg-4" key={prop.id}>
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <prop.icon
                    size={100}
                    style={{ marginBottom: "30px" }}
                  ></prop.icon>

                  <div>
                    <Link
                      to={prop.path}
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                    >
                      <h3>{prop.title}</h3>
                    </Link>
                  </div>

                  <p className="lead mb-0">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HighlightsLayout;
