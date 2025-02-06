import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped } from "react-typed";
import { FaRegHandPointRight } from "react-icons/fa";

function LeetcodePageBanner() {
  return (
    <>
      <PageBanner
        title={
          <>
            <div>
              <img
                className="homepage-profile-pic"
                src="../../../2024-100-new.gif"
                alt="Leetcode100"
              />
              <h1>LeetCode Solutions</h1>
            </div>
          </>
        }
        content={
          <>
            <p>A journey of a thousand miles begins with a single step.</p>
            <div className="columns-container">
              <div className="column">
                <h4>
                  {/* <FaRegHandPointRight /> */}
                  <a
                    href="https://github.com/Emily8183/leetcodeWithJava"
                    style={{ color: "white" }}
                  >
                    Java Solutions
                  </a>
                </h4>
              </div>
              <div className="column">
                <h4>
                  <a
                    href="https://github.com/Emily8183/2025-software-dev-problem-set/tree/emily_python"
                    style={{ color: "white" }}
                  >
                    Python Solutions
                  </a>
                </h4>
              </div>
              <div className="column">
                <h4>
                  <a
                    href="https://github.com/Emily8183/leetcode-study-notes/tree/main/leetcode-study-notes"
                    style={{ color: "white" }}
                  >
                    All Study Notes
                  </a>
                </h4>
              </div>
            </div>
            {/* <p style={{ fontSize: "20px" }}>
              (Click here to visit my <FaRegHandPointRight />
              <a
                href="https://github.com/Emily8183/leetcodeWithJava"
                style={{ color: "yellow" }}
              >
                GitHub repo
              </a>
              . Stay tuned for more features coming soon!)
            </p> */}
          </>
        }
      />
    </>
  );
}

export default LeetcodePageBanner;
