import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped } from "react-typed";
export const HomePageBanner = () => {
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

            <p>
              <ReactTyped
                strings={["I can help you to turn fantasy into reality!"]}
                typeSpeed={50}
                showCursor={false}
              />
            </p>
          </>
        }
      />
    </>
  );
};
