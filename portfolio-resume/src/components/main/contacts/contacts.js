import React from "react";
import SectionHeader from "../section-header/section-header";
import Contact from "./contact";
import "./contacts.css";

const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <SectionHeader title="Get in Touch" isButtonVisible={false} />
      <Contact />
    </section>
  );
};

export default Contacts;
