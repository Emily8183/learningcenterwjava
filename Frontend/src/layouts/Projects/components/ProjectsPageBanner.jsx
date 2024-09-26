import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";
import { ReactTyped } from "react-typed";

function ProjectsPageBanner() {
  return (
    <>
      {/* TODO: update the content on the projects page */}
      <PageBanner
        title="Project Journals"
        content={
          <>
            <br></br>

            <p>
              不闻不若闻之，闻之不若见之，见之不若知之，知之不若行之。学至于行而止矣。行之，明也。
            </p>
            <p>
              <ReactTyped
                strings={[
                  "Translation: I hear, and I forget. I see, and I remember. I do, and I understand.   - Xun Tzu",
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

export default ProjectsPageBanner;
