import React from "react";
import HighlightsData from "./HighlightsData";

function HighlightsLayout() {
  return (
    <>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {HighlightsData.map((prop) => (
              <div className="col-lg-4" key={prop.id}>
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    {/* <img
                      src={require("/assets/img/publicImages/favicon.ico")}
                      width="151"
                      height="233"
                      alt="anicon" //to change the icon
                    /> */}

                    <i className={`${prop.iconClass}m-auto text-primary`}></i>
                  </div>
                  <h3>{prop.title}</h3>
                  <p className="lead mb-0">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HighlightsLayout;
