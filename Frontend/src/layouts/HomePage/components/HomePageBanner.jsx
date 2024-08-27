import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped } from "react-typed";

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
            <p>Understand the why, define the what, and execute the how.</p>
            <br></br>
            <p>
              <ReactTyped
                strings={[
                  "With my background and skills, I know why products matter",
                ]}
                typeSpeed={50}
              />
              <br></br>
              <ReactTyped
                strings={["and can help you to turn concepts into reality."]}
                typeSpeed={50}
                startDelay={5000}
                // loop
              />
            </p>
          </>
        }
      />
    </>
  );
}

export default HomePageBanner;
