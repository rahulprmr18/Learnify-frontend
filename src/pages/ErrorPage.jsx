import React from "react";
import { Link } from "react-router-dom";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="common-btn">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;