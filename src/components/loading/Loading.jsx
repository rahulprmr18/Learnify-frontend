
import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loader">
        <span className="ripple"></span>
        <span className="ripple"></span>
        <span className="ripple"></span>
      </div>
    </div>
  );
};

export default Loading;
