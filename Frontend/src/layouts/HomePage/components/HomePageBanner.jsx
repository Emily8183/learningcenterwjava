import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";

function HomePageBanner() {
  return (
    <>
      <PageBanner
        title="Emily Lin"
        content={
          <>
            <p>
              Product Development | Full Stack Web Developer | Project
              Management
            </p>
            <br></br>
            {/* TODO: change the format of this para */}

            <p>Understand the why, define the what, and execute the how.</p>

            <p>
              With a background in product design and localization, I know why
              products matter and use my technical skills & teamwork to turn
              concepts into reality.
            </p>
          </>
        }
      />
    </>
  );
}

export default HomePageBanner;
