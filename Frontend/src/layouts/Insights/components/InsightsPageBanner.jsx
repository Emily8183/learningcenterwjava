import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";

function InsightsPageBanner() {
  return (
    <>
      <PageBanner
        title="Collected Thoughts"
        content={
          <>
            <p>New Findings from My Recent Tech Reads & Group Discussions</p>
          </>
        }
      />
    </>
  );
}

export default InsightsPageBanner;
