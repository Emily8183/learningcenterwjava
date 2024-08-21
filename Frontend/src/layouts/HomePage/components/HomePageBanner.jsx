import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped, Typed } from "react-typed";

function HomePageBanner() {
  return (
    <>
      <PageBanner
        title={
          <>
            <h1>Emily Lin</h1>
          </>
        }
        content={
          <>
            <p>
              Product Development | Full Stack Web Developer | Project
              Management
            </p>
            <br></br>
            <p>
              <ReactTyped
                strings={[
                  "Understand the why, define the what, and execute the how.",
                  "With my background and skills, I know why products matter and turn concepts into reality.",
                ]}
                typeSpeed={100}
                backSpeed={40}
                loop
              />
            </p>
          </>
        }
      />
    </>
  );
}

export default HomePageBanner;
