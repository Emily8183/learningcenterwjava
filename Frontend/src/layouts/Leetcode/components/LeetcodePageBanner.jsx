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
            <p style={{ fontSize: "20px" }}>
              (Click here to visit my <FaRegHandPointRight />
              <a
                href="https://github.com/Emily8183/leetcodeWithJava"
                style={{ color: "yellow" }}
              >
                GitHub repo
              </a>
              . Stay tuned for more features coming soon!)
            </p>

            <br></br>
            <p>A journey of a thousand miles begins with a single step.</p>
          </>
        }
      />
    </>
  );
}

export default LeetcodePageBanner;
