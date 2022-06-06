import React from "react";
import Header from "../Components/header/Header";
import "./About.css";
const About = () => {
  return (
    <>
      <Header />
      <div className="textbody">
        <h3>About Page</h3>
        <p id="text">This app is githup search.</p>
      </div>
    </>
  );
};

export default About;
