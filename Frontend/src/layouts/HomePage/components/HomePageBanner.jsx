import React from "react";

function HomePageBanner() {
  return (
    <>
      <div className="masthead p-5 mb-4 bg-dark header">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Emily Lin</h1>
                <p>
                  This is a simple diary app built with React.js and Node.js. It
                  is designed to help you keep track of your thoughts and
                  feelings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageBanner;
