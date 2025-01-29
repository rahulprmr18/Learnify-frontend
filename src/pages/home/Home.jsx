import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-content">
        <h1>Empower Your Learning Journey</h1>
        <p>Join thousands of students enhancing their skills through our expertly crafted courses. Your success starts here!</p>
        <button onClick={() => navigate("/courses")} className="common-btn">
          Explore Courses
        </button>
      </div>
      <Testimonials/>
    </div>
  );
};

export default Home;