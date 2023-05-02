import React from "react";
import SectionHeader from "../section-header/section-header";
import Intro from "./intro/intro";
import Skills from "./skills/skills";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <SectionHeader title="About Me" isButtonVisible={true} />
      <Intro />
      <Skills />
    </section>
  );
};

export default About;
