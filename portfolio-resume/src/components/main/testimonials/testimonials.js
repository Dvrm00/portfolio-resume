import React from "react";
import SectionHeader from "../section-header/section-header";
import Testimonial from "./testimonial";
import testimonials from "./testimonials.json";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <SectionHeader title="Testimonials" isButtonVisible={false} />
      <div className="testimonial-carousel">
        {testimonials.map((test, index) => (
          <Testimonial img={test.img} desc={test.desc} name={test.name} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
