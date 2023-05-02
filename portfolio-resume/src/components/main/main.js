import React from "react";
import About from "./about/about";
import Educations from "./educations/educations";
import Experiences from "./experiences/experiences";
import Testimonials from "./testimonials/testimonials";
import Contacts from "./contacts/contacts";
import "./main.css";

const Main = () => {
  return (
    <div className="main-content pull-right">
      <About />
      <Experiences />
      <Educations />
      <Testimonials />
      <Contacts />
    </div>
  );
};

export default Main;
