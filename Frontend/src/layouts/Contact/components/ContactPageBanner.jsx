import React from "react";
import PageBanner from "../../NavbarAndFooter/PageBanner";

function ContactPageBanner() {
  return (
    <>
      {/* TODO: update the content on the contact page */}
      <PageBanner
        title="Let's connect!"
        content={
          <>
            <p>Alone we can do so little; together we can do so much.</p>
            <p> - Helen Keller</p>
          </>
        }
      />
    </>
  );
}

export default ContactPageBanner;
