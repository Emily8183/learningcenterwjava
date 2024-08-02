import React from "react";

function Highlights() {
  return (
    <>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  {/* TODO: insert a icon here */}
                  {/* <link
                    rel="icon"
                    type="image/x-icon"
                    href=".../assets/img/publicImages/favicon.ico"
                  /> */}
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">
                  This theme will look great on any device, no matter the size!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Highlights;
