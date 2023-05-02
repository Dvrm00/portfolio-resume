import React from "react";
import SectionHeader from "../section-header/section-header";
import educations from "./educations.json";
import Education from "./education";
import "./educations.css";

const Educations = () => {
  return (
    <section id="education" className="resume">
      <SectionHeader title="Education" isButtonVisible={false} />
      <div className="row">
        {educations.map((ed, index) => (
          <div className="col-md-12 col-sm-12 col-xs-12" key={index}>
            <Education
              title={ed.title}
              month={ed.month}
              year={ed.year}
              desc={ed.desc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
