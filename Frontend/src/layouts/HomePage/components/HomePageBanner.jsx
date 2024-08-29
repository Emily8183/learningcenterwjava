import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped } from "react-typed";

function HomePageBanner() {
  return (
    <>
      <PageBanner
        title={
          <>
            <div>
              <img
                className="homepage-profile-pic"
                src="../../../EmProfile.jpg"
                alt="Em Profile Img"
              />
              <h1>Emily Lin</h1>
            </div>
          </>
        }
        content={
          <>
            <p>
              Product Development | Full Stack Web Developer | Project
              Management
            </p>
            <p>
              Understand the <b style={{ color: "#609c24" }}>WHY</b>, define the{" "}
              <b style={{ color: "#609c24" }}>WHAT</b>, and execute the{" "}
              <b style={{ color: "#609c24" }}>HOW</b>.
            </p>
            <br></br>
            <p>
              <ReactTyped
                strings={[
                  "With my background and skills, I know why products matter",
                ]}
                typeSpeed={50}
                showCursor={false}
              />
              <br></br>
              <ReactTyped
                strings={["and can help you to turn fantasy into reality!"]}
                typeSpeed={50}
                startDelay={5000}
              />
            </p>
          </>
        }
      />
    </>
  );
}

export default HomePageBanner;
