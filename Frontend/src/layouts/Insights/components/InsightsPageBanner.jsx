import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";

function InsightsPageBanner() {
  return (
    <>
      <PageBanner
        title="Coffee Chat about Tech"
        content={
          <>
            <br></br>
            <p>New Findings from My Recent Tech Reads & Group Discussions</p>
            <p>Grab a coffee and enjoy your reading! 😊</p>
          </>
        }
      />
    </>
  );
}

export default InsightsPageBanner;
