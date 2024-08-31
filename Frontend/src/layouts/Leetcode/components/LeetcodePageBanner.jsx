import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped } from "react-typed";

function LeetcodePageBanner() {
  return (
    <>
      <PageBanner
        title={
          <>
            <div>
              <img
                className="homepage-profile-pic"
                src="../../../LC50days.png"
                alt="Leetcode50"
              />
              <h1>LeetCode Solutions</h1>
            </div>
          </>
        }
        content={
          <>
            <p>
              I started my LeetCode journey in June 2024 to sharpen my coding
              skills.
            </p>

            <p>
              Turns out there is way more fun than I thought, and I am learning
              a ton along the way.
            </p>

            <p>
              More features will be added to this page.
              <b style={{ color: "#609c24" }}> Stay tuned!</b>
            </p>
            <br></br>
            <p>
              <ReactTyped
                strings={[
                  "A journey of a thousand miles begins with a single step.",
                ]}
                typeSpeed={50}
              />
            </p>
          </>
        }
      />
    </>
  );
}

export default LeetcodePageBanner;
