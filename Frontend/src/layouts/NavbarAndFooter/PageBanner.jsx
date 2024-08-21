import React from "react";

function PageBanner({ title, content }) {
  return (
    <>
      <div className="masthead p-5 mb-4 header">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center text-white">
                <h1 className="mb-3">{title}</h1>
                <p className="fs-4 mb-4">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageBanner;

// 每个页面的banner套用这个模板
