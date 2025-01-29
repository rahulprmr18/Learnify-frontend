import React from "react";
import "./testimonials.css";
import AaravSharma from "./images/Aarav_Sharma.jpg";
import DiyaPatel from "./images/Diya_Patel.jpg";
import RohanGupta from "./images/Rohan_Gupta.jpg";
import AnanyaIyer from "./images/Ananya_Iyer.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Aarav Sharma",
      position: "Student",
      message:
        "The coding courses here have been transformative for me. The hands-on projects helped me build real-world skills.",
      image: AaravSharma,
    },
    {
      id: 2,
      name: "Diya Patel",
      position: "Student",
      message:
        "The detailed explanations and interactive quizzes made learning coding so easy and fun. Highly recommended!",
      image: DiyaPatel,
    },
    {
      id: 3,
      name: "Rohan Gupta",
      position: "Student",
      message:
        "I’ve developed strong programming skills thanks to this platform. The mentorship is excellent and very supportive.",
      image: RohanGupta,
    },
    {
      id: 4,
      name: "Ananya Iyer",
      position: "Student",
      message:
        "This platform gave me the confidence to solve complex coding challenges. It's a must-try for every CS student!",
      image: AnanyaIyer,
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-heading">What Our Students Say</h2>
      <p className="testimonials-subheading">
        Our students are our best advocates! Here’s what they have to say about their experience.
      </p>
      <div className="testimonials-cards">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="student-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="message">"{testimonial.message}"</p>
            <div className="info">
              <p className="name">{testimonial.name}</p>
              <p className="position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
